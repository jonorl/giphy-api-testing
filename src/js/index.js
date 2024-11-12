import "../css/style.css";

// Global variables

const img = document.querySelector('img');
const btn = document.querySelector('#new-cat-button')

// Event listeners

fetchCatGif();
btn.addEventListener('click', fetchCatGif);

// Aux Functions

function fetchCatGif(){
fetch('https://api.giphy.com/v1/gifs/translate?api_key=pOslsruwcUp3D8BDLDebOYkF0yvwfpDf&s=cats', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });
}