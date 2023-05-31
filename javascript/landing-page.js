//blob animation effect
const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

let index = 0,
  interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

//star effect

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3));
}

//
