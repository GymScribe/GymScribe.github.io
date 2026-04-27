/**
 * GymScribe — Marketer Auth
 * Modal open/close · Supabase sign-in · Dashboard redirect
 */

/* ── Modal ── */
function openModal(e) {
  e.preventDefault();
  document.getElementById('modal').classList.add('open');
  document.getElementById('m-email').focus();
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('m-err').textContent = '';
}

/* ── Supabase login ── */
async function doLogin() {
  const email = document.getElementById('m-email').value.trim();
  const pass = document.getElementById('m-pass').value;
  const btn = document.getElementById('m-btn');
  const err = document.getElementById('m-err');

  if (!email || !pass) { err.textContent = 'Enter email and password.'; return; }

  btn.disabled = true;
  btn.textContent = 'Signing in…';
  err.textContent = '';

  const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });

  if (error) {
    err.textContent = error.message;
    btn.disabled = false;
    btn.textContent = 'Sign in to Dashboard';
    return;
  }

  // Sign-in succeeded — redirect to the dashboard.
  // The dashboard page handles marketer verification itself.
  window.location.href = 'marketer-dashboard.html';
}
