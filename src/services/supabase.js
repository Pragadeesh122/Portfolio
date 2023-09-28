import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rxuheicfobpuupyjicab.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4dWhlaWNmb2JwdXVweWppY2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2Nzk3MTgsImV4cCI6MjAwOTI1NTcxOH0.82kRWV8Wo2QaPf6b0uYTcppROsr1ujqEtKDBgpKiME4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
