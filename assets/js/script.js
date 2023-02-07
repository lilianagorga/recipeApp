async function getRandomMeal(){
   const randomMeal = fetch('www.themealdb.com/api/json/v1/1/random.php');
}

async function getMealById(id) {
    const meal = fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}

async function getMealBySearch(term){
    const meals = fetch('www.themealdb.com/api/json/v1/1/search.php?s='+term);
}