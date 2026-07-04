-- ============================================================
-- ANJINHO — Supabase schema
-- Run this in the Supabase SQL editor (or via `supabase db push`)
-- ============================================================

-- Extensions
create extension if not exists "uuid-ossp";

-- ------------------------------------------------------------
-- profiles: one row per authenticated user (linked to auth.users)
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  streak_count integer not null default 0,
  is_premium boolean not null default false,
  premium_expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by owner"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Profiles are insertable by owner"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Profiles are updatable by owner"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create a profile row whenever a new user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ------------------------------------------------------------
-- conversations: chat threads between the user and the "anjinho"
-- ------------------------------------------------------------
create table if not exists public.conversations (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.conversations enable row level security;

create policy "Conversations are managed by owner"
  on public.conversations for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ------------------------------------------------------------
-- messages: individual chat messages (user or assistant)
-- ------------------------------------------------------------
create table if not exists public.messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  bible_reference text,
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

create policy "Messages are managed by owner"
  on public.messages for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists messages_conversation_id_idx on public.messages (conversation_id, created_at);

-- ------------------------------------------------------------
-- prayers: saved prayers logged by the user (Oração tab history)
-- ------------------------------------------------------------
create table if not exists public.prayers (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  category text not null,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.prayers enable row level security;

create policy "Prayers are managed by owner"
  on public.prayers for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ------------------------------------------------------------
-- reading_plans: catalog of Bible reading plans (public, read-only)
-- ------------------------------------------------------------
create table if not exists public.reading_plans (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  total_days integer not null,
  icon text not null,
  color text not null
);

alter table public.reading_plans enable row level security;

create policy "Reading plans are readable by everyone"
  on public.reading_plans for select
  using (true);

insert into public.reading_plans (title, total_days, icon, color)
values
  ('Novo Testamento', 21, 'book-open', 'blue'),
  ('Salmos', 30, 'heart', 'red'),
  ('Provérbios', 15, 'leaf', 'green')
on conflict do nothing;

-- ------------------------------------------------------------
-- user_reading_progress: tracks each user's progress on a plan
-- ------------------------------------------------------------
create table if not exists public.user_reading_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id uuid not null references public.reading_plans(id) on delete cascade,
  current_day integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (user_id, plan_id)
);

alter table public.user_reading_progress enable row level security;

create policy "Reading progress is managed by owner"
  on public.user_reading_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ------------------------------------------------------------
-- updated_at helper trigger (reused across tables)
-- ------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists set_conversations_updated_at on public.conversations;
create trigger set_conversations_updated_at
  before update on public.conversations
  for each row execute procedure public.set_updated_at();

drop trigger if exists set_reading_progress_updated_at on public.user_reading_progress;
create trigger set_reading_progress_updated_at
  before update on public.user_reading_progress
  for each row execute procedure public.set_updated_at();
