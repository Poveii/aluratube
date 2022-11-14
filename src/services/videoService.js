import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://ygcgjbgzxtmuzzjhzcpz.supabase.co"
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnY2dqYmd6eHRtdXp6amh6Y3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MjMxMDEsImV4cCI6MTk4Mzk5OTEwMX0.4rKHch7tnIKhjz8EgI_vpj-_Gj4kspidagFT1yEY41A"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos")
    },
  }
}
