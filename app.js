const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
const APP_ID = 'f637d439';
const APP_key = 'dd2f1c1a8ce7a68f81678d2b4e4c7f47'
let searchQuery = '';

searchForm.addEventListener("submit", function(e){
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
})

async function fetchAPI(){
  let baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
  let response = await fetch(baseURL);
  let data = await response.json()
  //console.log(data)
  generatedHTML(data.hits)
}

function generatedHTML(results){
console.log(results)

let generateCard = '';

results.map( (result) => {
  generateCard += 

  ` <div class="item">
  <img src="${result.recipe.image}" alt="">
  <div class="flex-container">
    <h1 class="title">${result.recipe.label}</h1>
    <a class="view-btn" href="${result.recipe.url}" target="_blank">View Recipe</a>
  </div>
  <p class="item-data">Calories: ${Math.floor(result.recipe.calories)}</p>
</div> 
  `
});

searchResultDiv.innerHTML = generateCard;

}
