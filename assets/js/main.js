// Create a variable for the list of image names

const imageNames = [
  "01.webp",
  "02.webp",
  "03.webp",
  "04.webp",
  "05.webp",
];


// Create a variable for the image displayed on screen

let activeImage = 0;


// Create a variable for HTML slide element

const slideElement = document.querySelector(".slides");


// Create a loop to iterate through all the images in the list and shows image on screen

for (let i = 0; i < imageNames.length; i++) {

  const image = imageNames[i];

  //console.log(image);

  const imageMarkup = `<img class="${i === activeImage ? "active" : ""}" src="./assets/img/${image}" alt="">`

  slideElement.insertAdjacentHTML("beforeend", imageMarkup);

}


// Create a variable for the carousel controls buttons

const nextElement = document.querySelector(".next");
const prevElement = document.querySelector(".prev");

// Carousel control buttons management

nextElement.addEventListener("click", function () {

  activeImage++;

  if (activeImage === imageNames.length) {
    activeImage = 0;
  }

  const currentImage = document.querySelector("img.active");
  currentImage.classList.remove("active");

  const allSlides = document.querySelectorAll(".slides img");

  allSlides[activeImage].classList.add("active");

  console.log(activeImage);

});

prevElement.addEventListener("click", function () {

  activeImage--;

  if (activeImage < 0) {
    activeImage = imageNames.length - 1;
  }

  const currentImage = document.querySelector("img.active");
  currentImage.classList.remove("active");

  const allSlides = document.querySelectorAll(".slides img");

  allSlides[activeImage].classList.add("active");

  console.log(activeImage);

});