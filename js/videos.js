// script.js
// Sample JSON data representing the videos
const jsonData = {
  videos: [
    // {
    //   title: "",
    //   link: "",
    //   thumbnail: "",
    // },
    {
      title: "I Survived in One jar with @bofmomo",
      link: "https://youtu.be/Z-wc_WGKFVc",
      thumbnail: "https://i.ytimg.com/vi/Z-wc_WGKFVc/maxresdefault.jpg",
    },
    {
      title: "Modeling Your Minecraft Ideas",
      link: "https://www.youtube.com/watch?v=6ibtc4m8JUo&list=PLjKPrKuEWg0sZe8mUSjBmMLa3X8PFL4Id",
      thumbnail: "https://i.ytimg.com/vi/6ibtc4m8JUo/maxresdefault.jpg",
    },
    {
      title: "Minecraft But i Only Have One Chunk",
      link: "https://www.youtube.com/playlist?list=PLjKPrKuEWg0vjQHyTV938RZJNh0VtsUUL",
      thumbnail:
        "https://i.ytimg.com/vi/suL3kylXLs0/hq720.jpg?sqp=-…j0AgKJDeAE=&rs=AOn4CLDEH_wxQiiAO1WxWkfQYpw4F365ZQ",
    },
    {
      title: "I Played On ONE Block With Firends",
      link: "https://youtu.be/hO99AKUQfg4",
      thumbnail: "https://i.ytimg.com/vi/hO99AKUQfg4/maxresdefault.jpg",
    },
    {
      title: "How I trolled @NishantSAMA + Face Reveal",
      link: "https://www.youtube.com/watch?v=pyggqXeaViU",
      thumbnail: "https://i.ytimg.com/vi/pyggqXeaViU/maxresdefault.jpg",
    },
    {
      title: "I Accepted Your BAD Minecraft Challenges",
      link: "https://youtu.be/OZxUbDz-VmY",
      thumbnail: "https://i.ytimg.com/vi/OZxUbDz-VmY/maxresdefault.jpg",
    },
    {
      title: "Top Nepali minecraft Servers",
      link: "https://www.youtube.com/watch?v=5oInqJbPjkw",
      thumbnail:
        "https://i.ytimg.com/vi/5oInqJbPjkw/hq720.jpg?sqp=-…j0AgKJDeAE=&rs=AOn4CLCZQ8WjMtvbVmQvbm36QCjL1iyktw",
    },

    // {
    //   title: "",
    //   link: "",
    //   thumbnail: "",
    // },
  ],
};

// Function to create the video items dynamically
function createVideoItems() {
  const videoContainer = document.getElementById("video-container");

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
}

// Call the function to create the video items when the DOM is loaded
document.addEventListener("DOMContentLoaded", createVideoItems);

// -------------------------
