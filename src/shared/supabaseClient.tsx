import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SB_URL; // Project URL
const supabaseAnonKey = import.meta.env.VITE_SB_KEY; // API Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
