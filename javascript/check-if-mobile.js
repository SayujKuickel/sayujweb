if (/Mobi/.test(navigator.userAgent)) {
  const alertTitle = document.getElementById("alert-title");
  const alertBackground = document.getElementById("alert-background");

  alertTitle.style.display = ` block`;
  alertBackground.style.height = `100%`;
  alertBackground.style.width = `100%`;

  setTimeout(() => {
    window.location = "./about.html";
  }, 1500);
}

window.addEventListener("load", function () {
  setTimeout(function () {
    const arrow = document.getElementById("arrow");
    arrow.style.display = `block`;
  }, 8000);
});
