// Function to fetch JSON data from a URL
async function fetchJSONData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}

// Function to create the video items dynamically
async function createVideoItems() {
  const videoContainer = document.getElementById("video-container");
  const jsonUrl = "https://ytvedio.bishalluitel67696.workers.dev/"; // Replace with your JSON URL

  try {
    const jsonData = await fetchJSONData(jsonUrl);

    // Loop through each video data in the JSON
    jsonData.videos.forEach((videoData) => {
      // Create the necessary elements
      const videoItem = document.createElement("div");
      videoItem.className = "video-item";

      const videoLink = document.createElement("a");
      videoLink.href = videoData.link;
      videoLink.target = "_blank";

      const imageContainer = document.createElement("div");
      imageContainer.className = "image-container";

      const thumbnailImg = document.createElement("img");
      thumbnailImg.src = videoData.thumbnail;

      const videoItemBody = document.createElement("div");
      videoItemBody.className = "video-item-body";

      const videoTitle = document.createElement("p");
      videoTitle.textContent = videoData.title;

      // Append the elements to create the desired structure
      videoItem.appendChild(videoLink);
      videoLink.appendChild(imageContainer);
      imageContainer.appendChild(thumbnailImg);
      videoLink.appendChild(videoItemBody);
      videoItemBody.appendChild(videoTitle);

      // Append the video item to the container
      videoContainer.appendChild(videoItem);
    });
  } catch (error) {
    console.error("Error fetching or processing JSON data:", error);
  }
}

// Call the function to create the video items when the DOM is loaded
document.addEventListener("DOMContentLoaded", createVideoItems);
