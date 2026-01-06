function loadGuestName() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("to");

  const guestEl = document.getElementById("guestName");

  if (name) {
    guestEl.textContent = decodeURIComponent(name);
  } else {
    guestEl.textContent = "Bạn";
  }
}

loadGuestName();