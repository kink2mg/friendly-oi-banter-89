// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lnydjmdrifibxpwzaejk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxueWRqbWRyaWZpYnhwd3phZWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MjE3NzMsImV4cCI6MjA1NDE5Nzc3M30.J5wSfvnubyeUxvmqW36iIeJA-Ow2q_5g8nJls14whpU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);