import "../css/style.css";

// Global variables

const img = document.querySelector("img");
const randomBtn = document.querySelector("#random-cat-button");
const searchBtn = document.querySelector("#search-cat-button");
const input = document.querySelector("input");

// Event listeners

fetchCatGif();
randomBtn.addEventListener("click", fetchCatGif);
searchBtn.addEventListener("click", () => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=pOslsruwcUp3D8BDLDebOYkF0yvwfpDf&s=${input.value}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
});

// Aux Functions

function fetchCatGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=pOslsruwcUp3D8BDLDebOYkF0yvwfpDf&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
