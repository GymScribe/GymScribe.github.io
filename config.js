/**
 * GymNote — Supabase Configuration
 *
 * ⚠️  Never commit real credentials to a public repository.
 *     Move these to environment variables / a backend proxy in production.
 */

const SUPABASE_URL = 'https://jmreuppppukydnajtulx.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcmV1cHBwcHVreWRuYWp0dWx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4ODE4MDksImV4cCI6MjA5MjQ1NzgwOX0.Kl7ryWIeb3GCLTiiFwrEPVIdvMzlvkdBmbOa_LNTU40';

// Supabase client — created in main.js after the SDK loads
let sb = null;
