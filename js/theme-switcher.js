var checkbox = document.getElementById("dark-mode-toggle");
var uncheckedIcon = document.getElementById("unchecked-icon");
var checkedIcon = document.getElementById("checked-icon");

// Check local storage for existing theme
var theme = localStorage.getItem("theme");
if (theme === "dark") {
  checkbox.checked = true;
  uncheckedIcon.style.display = "none";
  checkedIcon.style.display = "block";
} else {
  checkbox.checked = false;
  uncheckedIcon.style.display = "block";
  checkedIcon.style.display = "none";
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    uncheckedIcon.style.display = "none";
    checkedIcon.style.display = "block";
    localStorage.setItem("theme", "dark");
  } else {
    uncheckedIcon.style.display = "block";
    checkedIcon.style.display = "none";
    localStorage.setItem("theme", "light");
  }
});
