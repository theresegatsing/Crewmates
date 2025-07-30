import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tcarzjcjcljcusmbiqvk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYXJ6amNqY2xqY3VzbWJpcXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MDU1NjksImV4cCI6MjA2OTM4MTU2OX0.lyyhBMOyo9QKr5NuBMohL9H9nqp_EyTpQHtbJJmfGEM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
