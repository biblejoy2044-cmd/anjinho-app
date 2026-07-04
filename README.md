# Anjinho 💗

App de fé mobile-first: converse com o "Anjinho", leia a Bíblia, acompanhe planos de leitura e registre suas orações.

Stack: **React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React + Supabase**.

## Rodando localmente

```bash
npm install
cp .env.example .env   # preencha com suas chaves do Supabase
npm run dev
```

## Configurando o Supabase

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Vá em **SQL Editor** e rode o conteúdo de `supabase/schema.sql`. Isso cria:
   - `profiles` (perfil do usuário, streak, status premium)
   - `conversations` e `messages` (histórico de chat)
   - `prayers` (orações salvas)
   - `reading_plans` e `user_reading_progress` (planos de leitura da Bíblia)
   - Row Level Security em todas as tabelas (cada usuário só acessa seus próprios dados)
   - Trigger que cria automaticamente um `profile` ao cadastrar um novo usuário
3. Em **Project Settings → API**, copie a `Project URL` e a `anon public key` para o `.env`.
4. Em **Authentication → Providers**, o login por e-mail/senha já vem habilitado por padrão.

## Estrutura de pastas

```
src/
  components/   # componentes reutilizáveis (BottomNav, ChatBubble, MascotAvatar, Button...)
  hooks/         # useAuth (contexto de autenticação Supabase)
  lib/           # cliente Supabase
  pages/         # telas: Splash, Login, Signup, ChatHome, ChatConversation, Bible, Prayer, Profile
  types/         # tipos TypeScript do banco de dados
supabase/
  schema.sql     # schema completo com RLS
```

## Deploy na Vercel

1. Suba o projeto para o GitHub.
2. Importe o repositório na Vercel.
3. Configure as variáveis de ambiente `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no painel da Vercel.
4. Build command: `npm run build` — Output directory: `dist`.

## Observação sobre o mascote

A ilustração do anjinho usada neste projeto (`MascotAvatar.tsx`) é uma peça de arte **original**, criada para seguir a mesma paleta de cores e composição (halo dourado, cabelo cacheado castanho, asas brancas, túnica) vista nas referências, sem copiar diretamente a arte enviada.
