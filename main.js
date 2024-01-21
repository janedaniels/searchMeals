const form = document.querySelector(".search-form");
const input = document.querySelector(".search");
const result = document.querySelector(".results-wrapper");
console.log(input);
console.log(form);
console.log(result);

function app() {

    const renderItem = (itemData) => {
        return `<div class=" item-wrapper">
        <img src="${itemData.strMealThumb}" class="img-meal"/>
        <h3 class="meal-title">${itemData.strMeal}</h3>
        <p class="meal-category">${itemData.strCategory}</p>
        <p class="meal-country">${itemData.strArea}</p>
        <p class="meal-instraction">${itemData.strInstructions}</p>
        </div>`;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + input.value).then((response) => {
            return response.json()
        }).then((data) => {
            let content = '';
            for (let meal of data.meals) {
                content += renderItem(meal)
            }
            result.innerHTML = content;
        }).catch(err => {
            console.error(err);
            alert("Something went wrong!")
        });
    });
}

app()




