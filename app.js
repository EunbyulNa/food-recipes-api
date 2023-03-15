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
  let baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
 

 
    let response = await fetch(baseURL);
    console.log(response)

 
    let data = await response.json();
   
      generatedHTML(data.hits);

     if(data.hits.length === 0 ){
      console.log("empty")
      generatedError()
     }
 
}

  
function generatedError(){
  
  let generateCard = '';

  generateCard += 


  ` <div class="item">
 
  <div class="flex-container">
    <h1 class="title">${`Sorry, there is no Data`}</h1>
  

</div> 
  `

  searchResultDiv.innerHTML = generateCard;
  
}


function generatedHTML(results){

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
  <p class="item-data">Diet Labels: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'Sorry No data found' }</p>
  <p class="item-data">Health Labels: ${result.recipe.healthLabels}</p>

</div> 
  `
});

searchResultDiv.innerHTML = generateCard;

}
