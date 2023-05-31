function changeImage() {
  var select = document.getElementById("selection-menu");
  var image = document.getElementById("image");
  var downloadLink = document.getElementById("download-link");

  var selectedImage = select.value;

  image.src = selectedImage;

  var downloadPath = selectedImage.replace("/inventory/", "/inventory/skins/");
  downloadLink.href = downloadPath;
}

window.onload = changeImage;
