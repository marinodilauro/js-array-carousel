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


// Create a loop to iterate through all the images in the list

for (let i = 0; i < imageNames.length; i++) {

  const image = imageNames[i];

  //console.log(image);

  const imageMarkup = `<img class="${i === activeImage ? "active" : ""}" src="./assets/img/${image}" alt="">`

  slideElement.insertAdjacentHTML("beforeend", imageMarkup);

}