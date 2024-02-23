// Create a variable for the list of image names

const imageNames = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];


// Create a variable for the image displayed on screen

let activeImage = 0;


// Create a variable for HTML slide element

const slideElement = document.querySelector(".slides");


// Create a loop to iterate through all the images in the list

for (let i = 0; i < imageNames.length; i++) {

  const image = imageNames[i];

  console.log(image);

}