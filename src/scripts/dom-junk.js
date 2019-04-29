const junkDom = (obj) => {
    return `<div>
                <span>${obj.name}</span>
                <span>${obj.categoryId}</span>
            </div>`;
};


function buildJunkDom(dataArray) {
    mainContainer.innerHTML = "";
    dataArray.forEach((obj) => {
        mainContainer.innerHTML += junkDom(obj);
    });
};

const buildJunkDetailDom = (data) => {
    mainContainer.innerHTML = "";
    data.forEach(element => {
        mainContainer.innerHTML += junkDetailDom(element);
    });
};



function buildDOMJunkAdder() {
    API.getCategories()
        .then(categoryList => {
            let categorySelect = "";
            categoryList.forEach(category => {
                categorySelect += `<option value="${category.id}">${category.name}</option>`;
            });
            mainContainer.innerHTML = `
          <h2>Add Junk</h2>
          <fieldset>
            <div class="form-row">
              <label for="junk__name">Name:</label>
              <input id="junk__name" class="junk__name" type="text" autofocus />
            </div>
            <div class="form-row">
              <label for="junk__category">Category:</label>
              <select id="junk__category">
                ${categorySelect}
              </select>
            </div>
            <div class="form-row">
              <label for"new__category">New category?</label>
              <input type="checkbox" id="add-category" />
            </div>
            <div class="form-row">
                <label for="new__category-input">New Category Name</label>
                <input type="text" id="new__category-input" />
            </div>
          </fieldset>
          <button class="btn category__save" id="btn-saveJunk">Save Junk</button>`;
        })
        .then(addJunkEventHandler);
}

function addJunkEventHandler() {
    document.querySelector("#btn-saveJunk").addEventListener("click", saveJunk);
}

function saveJunk() {
    let newJunk = {
        name: document.getElementById("junk__name").value,
        categoryId: document.getElementById("junk__category").value
    }
    const newCategory = document.getElementById("add-category").checked; // Boolean
    const newCategoryInput = {
        name: document.getElementById("new__category-input").value
    };
    // Once you have collected all the values, build your data structure

    function saveCategory(categoryObj) {
        return API.save("category", categoryObj);
    }

    function saveJunk(junkObj) {
        API.save("junk", junkObj);
    }

    if (newCategory) {
        saveCategory(newCategoryInput)
            .then(savedCategory => {
                newJunk.categoryId = savedCategory.id;
                saveJunk(newJunk);
            })
    } else {
        saveJunk(newJunk);
    }

}