/**
 * GymNote — Application Entry Point
 * Boots Supabase, then initialises all UI modules.
 */

document.addEventListener('DOMContentLoaded', () => {
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  initNavScroll();
  initReveal();
});
