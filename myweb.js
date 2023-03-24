//hidden darkfigure
const icon = document.getElementById("darkfigure");
icon.style.display = "none";

const lightIcon = document.getElementById("lightfigure");
const switchButton = document.querySelector(".theme-switch");

//switch darkfigure when clicked
switchButton.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  const icon = document.getElementById("darkfigure");
  const lightIcon = document.querySelector("img[alt='lightfigure']");

  if (icon.style.display === "none") {
    icon.style.display = "block";
    lightIcon.style.display = "none";
  } else {
    icon.style.display = "none";
    lightIcon.style.display = "block";
  }
  // switch background n border color
  const cardS = document.querySelectorAll(".background, .creSpa, .avoca");

  cardS.forEach((cardS) => {
    cardS.classList.toggle("light-theme");
  });
});
