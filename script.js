//your code here

const parent = document.getElementById("parent");
let selectedImage = null;

// Add event listeners for drag events
parent.addEventListener("dragstart", (e) => {
  selectedImage = e.target;
});

parent.addEventListener("dragover", (e) => {
  e.preventDefault();
});

parent.addEventListener("drop", (e) => {
  e.preventDefault();
  if (selectedImage !== null) {
    swapImages(selectedImage, e.target);
    selectedImage = null;
  }
});

// Function to swap images between two divs
function swapImages(image1, image2) {
  const image1Index = Array.from(parent.children).indexOf(image1);
  const image2Index = Array.from(parent.children).indexOf(image2);

  // Swap the background images
  const tempBackground = image1.style.backgroundImage;
  image1.style.backgroundImage = image2.style.backgroundImage;
  image2.style.backgroundImage = tempBackground;

  // Swap the text content
  const tempText = image1.textContent;
  image1.textContent = image2.textContent;
  image2.textContent = tempText;
}