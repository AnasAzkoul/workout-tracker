import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_DB_URL;
const supabaseKEY = import.meta.env.VITE_DB_KEY;

export const supabase = createClient(supabaseURL, supabaseKEY);
