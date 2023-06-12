import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://swxiwonaadiuwsksuxku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3eGl3b25hYWRpdXdza3N1eGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwOTEwMjcsImV4cCI6MjAwMDY2NzAyN30.GZhPShfJZpyVrpw9godfCtv34LDmUQuOcCWDQ7tBhgQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
