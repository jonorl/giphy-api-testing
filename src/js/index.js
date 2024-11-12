import "../css/style.css";

// Global variables

const img = document.querySelector("img");
const randomBtn = document.querySelector("#random-cat-button");
const searchBtn = document.querySelector("#search-cat-button");
const input = document.querySelector("input");

// Global function

fetchRandomCatGif();

// Event listeners

randomBtn.addEventListener("click", fetchRandomCatGif);
searchBtn.addEventListener("click", () => {
  getCats();
  async function getCats() {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=pOslsruwcUp3D8BDLDebOYkF0yvwfpDf&s=${input.value}`,
        { mode: "cors" }
      );
      const catData = await response.json();
      img.src = catData.data.images.original.url;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      err();
    }
  }
});

// Aux Functions

function err() {
  alert("You must enter a value");
}

function fetchRandomCatGif() {
  async function getCats() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=pOslsruwcUp3D8BDLDebOYkF0yvwfpDf&s=cats",
      { mode: "cors" }
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
  getCats();
}
