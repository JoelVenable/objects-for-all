console.log("What's in the junk drawer?");

const API = {
    _fetchLocal: function(endpoint, optionsObj) {
        return fetch(`http://localhost:8088/${endpoint}`, optionsObj)
            .then(response => response.json());
    },
    getCategories: function () {
        return this._fetchLocal("category");
    },
    getJunk: function () {
        return this._fetchLocal("junk");
    },
    getJunkWithCategory: function () {
        return this._fetchLocal("junk/1?_embed=category");
    },
    getCategoriesWithJunk: function () {
        return this._fetchLocal("category?_embed=junk");
    },
    save: function (endpoint, obj) {
        return this._fetchLocal(endpoint,{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
    }
};

// foodFactory = (foodItem) => {
//     return `<h2>${foodItem.name}</h2>`;
// };

// addFoodToDom = (foodAsHTML) => {
//     el.innerHTML += foodAsHTML;
// };

// function getData(resource){
//     el.innerHTML = "";

//     fetch(`http://localhost:8088/${resource}`)
//         .then(foodResult => {
//             console.log(foodResult);
//             return foodResult;
//         })
//         .then(foods => foods.json())
//         .then(parsedFoods => {
//             parsedFoods.forEach(food => {
//                 const foodAsHTML = foodFactory(food);
//                 addFoodToDom(foodAsHTML);
//             });
//         });
// }

// const el = document.querySelector("#container");
// const getDataButton = document.getElementById("btn-getData");
// getDataButton.addEventListener("click", () =>  getData("drinks"));

// //the following does not work as expected. function is invoked immediately
// // getDataButton.addEventListener("click", getData("drinks"));

// const getDataButton2 = document.getElementById("btn-getData2");
// getDataButton2.addEventListener("click", () => getData("food"));



















