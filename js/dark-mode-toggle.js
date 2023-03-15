// Get the current state of the checkbox from local storage
var checkbox = document.getElementById("dark-mode-toggle");
checkbox.checked = JSON.parse(localStorage.getItem("dark-mode-toggle"));

function toggleDarkMode() {
  // Save the current state of the checkbox to local storage
  localStorage.setItem("dark-mode-toggle", checkbox.checked);
}
