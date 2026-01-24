// If user refreshed index.html, send them back to loader
if (!sessionStorage.getItem("fromLoader")) {
  window.location.replace("loader.html");
} else {
  // Clear flag so next refresh shows loader again
  sessionStorage.removeItem("fromLoader");
}
