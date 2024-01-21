const form = document.querySelector(".search-form");
const input = document.querySelector(".search");
const result = document.querySelector(".results-wrapper");
const countryList = document.querySelector(".list-country")
const categoryList = document.querySelector(".list-category")

// =======================Country List================================
function renderCountryList() {
    const renderCountryListItem = (itemData) => {
        return `<li class="meal-country-item list">${itemData.strArea}</li>`;
    }
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => {
        return response.json()
    }).then((data) => {
        let list = '';
        for (let meal of data.meals) {
           
            list += renderCountryListItem(meal);
            countryList.innerHTML = list;
            }
        
        }).catch(err => {
            console.error(err);
            alert("Something went wrong!")
        });  
}

renderCountryList()

// ==================== CATEGORY LIST ===============
function renderCategoryList () {
    const renderCategoryListItem = (itemData) => {
    return `<li class="meal-category-item list">${itemData.strCategory}</li>`;
    }
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => {
            return response.json()
        }).then((data) => {
            let list = '';
            for (let meal of data.meals) {
                list += renderCategoryListItem(meal)
            }
            categoryList.innerHTML = list;
        }).catch(err => {
            console.error(err);
            alert("Something went wrong!")
        });  
}

renderCategoryList()


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






