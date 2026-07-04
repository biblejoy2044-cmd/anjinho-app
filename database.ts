export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          streak_count: number
          is_premium: boolean
          premium_expires_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          streak_count?: number
          is_premium?: boolean
          premium_expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      conversations: {
        Row: {
          id: string
          user_id: string
          title: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['conversations']['Insert']>
      }
      messages: {
        Row: {
          id: string
          conversation_id: string
          user_id: string
          role: 'user' | 'assistant'
          content: string
          bible_reference: string | null
          created_at: string
        }
        Insert: {
          id?: string
          conversation_id: string
          user_id: string
          role: 'user' | 'assistant'
          content: string
          bible_reference?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['messages']['Insert']>
      }
      prayers: {
        Row: {
          id: string
          user_id: string
          category: string
          content: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category: string
          content: string
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['prayers']['Insert']>
      }
      reading_plans: {
        Row: {
          id: string
          title: string
          total_days: number
          icon: string
          color: string
        }
        Insert: {
          id?: string
          title: string
          total_days: number
          icon: string
          color: string
        }
        Update: Partial<Database['public']['Tables']['reading_plans']['Insert']>
      }
      user_reading_progress: {
        Row: {
          id: string
          user_id: string
          plan_id: string
          current_day: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_id: string
          current_day?: number
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['user_reading_progress']['Insert']>
      }
    }
  }
}

export interface FeatureItem {
  icon: string
  color: 'blue' | 'red' | 'gold' | 'green'
  title: string
  description: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  bibleReference?: string
  createdAt: string
}
