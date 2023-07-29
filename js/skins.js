// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const imageSelect = document.getElementById("imageSelect");
  const imageContainer = document.getElementById("imageContainer");
  const downloadButton = document.getElementById("downloadButton");

  // Map filenames to their respective extensions
  const imageExtensions = {
    sayuj: "gif",
    visal: "gif",
    crystallinearc: "gif",
    omen: "gif",
    sakshyam: "gif",
    theelitehat: "gif",
    awpain: "gif",
    // Add more mappings for other images if needed
  };

  function displaySelectedImage() {
    const selectedValue = imageSelect.value;
    const imageExtension = imageExtensions[selectedValue];
    const imageUrl = `./images/${selectedValue}.${imageExtension}`;

    // Show the selected image in the imageContainer
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="${selectedValue}" />`;
  }

  imageSelect.addEventListener("change", displaySelectedImage);

  // Trigger the change event to display the initial image on page load
  displaySelectedImage();

  function downloadImage() {
    const selectedValue = imageSelect.value;
    const downloadLink = document.createElement("a");
    const imageExtension = "png"; // Always download the PNG version

    downloadLink.href = `./images/skins/${selectedValue}.${imageExtension}`;
    downloadLink.download = `${selectedValue}.${imageExtension}`;

    // Simulate a click on the link to trigger the download
    downloadLink.click();
  }

  // Attach the downloadImage function to the button click event
  downloadButton.addEventListener("click", downloadImage);
});
