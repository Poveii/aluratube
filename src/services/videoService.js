import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
  return {
    supabase,
    getAllVideos() {
      return supabase.from("videos")
    },
  }
}
