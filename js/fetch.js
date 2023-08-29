function createVideoItems(videosData) {
  const videoContainer = document.getElementById("video-container");

  // Loop through each video data in the JSON
  videosData.forEach((videoData) => {
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
}

// Fetch the JSON data from the provided webpage
fetch('https://ytvedio.bishalluitel67696.workers.dev')
  .then(response => response.json())
  .then(data => {
    const videosData = data.videos; // Assuming the structure is similar to your example
    createVideoItems(videosData);
  })
  .catch(error => console.error('Error fetching JSON data:', error));
