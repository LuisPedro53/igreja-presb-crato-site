import { createClient } from '@supabase/supabase-js';

// Environment variables (Vite: import.meta.env.VITE_...)
// Make sure to define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    'VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in environment variables.'
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Optional: helper to check connection (not used by default)
export const checkSupabase = async () => {
  const { data, error } = await supabase
    .from('eventos')
    .select('cdevento')
    .limit(1);
  return { data, error };
};
