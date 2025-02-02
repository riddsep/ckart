import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mobkdagroxcwmolsyqaj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYmtkYWdyb3hjd21vbHN5cWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzOTAzMTAsImV4cCI6MjA1Mzk2NjMxMH0.NI0cyqiiN156pW4e-ERxejsh2h7RldVjeBnENYcOt-Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
