/**
 * GymNote — Marketer Auth
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
  const pass  = document.getElementById('m-pass').value;
  const btn   = document.getElementById('m-btn');
  const err   = document.getElementById('m-err');

  if (!email || !pass) { err.textContent = 'Enter email and password.'; return; }

  btn.disabled    = true;
  btn.textContent = 'Signing in…';
  err.textContent = '';

  const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });

  if (error) {
    err.textContent = error.message;
    btn.disabled    = false;
    btn.textContent = 'Sign in to Dashboard';
    return;
  }

  // Verify the user is a registered marketer
  const { data: mk, error: mkErr } = await sb.rpc('get_marketer_dashboard');
  if (mkErr || !mk) {
    err.textContent = 'Not a marketer account.';
    await sb.auth.signOut();
    btn.disabled    = false;
    btn.textContent = 'Sign in to Dashboard';
    return;
  }

  sessionStorage.setItem('mk_session', JSON.stringify({ email, name: mk.marketer?.name }));
  window.location.href = 'marketer-dashboard.html';
}
