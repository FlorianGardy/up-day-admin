export default function handleSignOut() {
  localStorage.clear();
  window.location.href = "/";
}
