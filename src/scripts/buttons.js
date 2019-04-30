buttons = [{
    name: "Get Junk",
    btnId: "#btn-getJunk",
    function: () => {
      API.getJunk()
        .then(result => {
          console.log("junk", result);
          buildJunkDom(result);
        });
    }
  },
  {
    name: "Get Categories",
    btnId: "#btn-getCategories",
    function: () => {
      API.getCategories()
        .then(result => {
          console.log("category", result);
          buildCategoryDom(result);
        });
    }
  },
  {
    name: "Get Category Details",
    btnId: "#btn-getCategoryDetails",
    function: () => {
      API.getCategoriesWithJunk()
        .then(result => {
          console.log("category list", result);
          buildCategoryDetailDom(result);
        });
    }
  },
  {
    name: "Add a Category",
    btnId: "#btn-addCategory",
    function: () => {
      // build DOM elements
      mainContainer.innerHTML = `
        <h2>More Junk Categories</h2>
        <fieldset>
            <label for="junk__category">Name:</label>
            <input id="junk__category" class="junk__category" type="text" autofocus />
        </fieldset>
        <button class="btn category__save" id="btn-saveCategory">Save Junk Category</button>`;

      //  add Event Listener
      document.querySelector("#btn-saveCategory").addEventListener("click", event => {
        const category = document.querySelector(".junk__category").value;
        // Once you have collected all the values, build your data structure
        const categoryObj = {
          name: category
        };
        API.save("category", categoryObj)
          .then(parsedResult => {
            console.log("what is the result", parsedResult);
          });
      });
    }
  },
  {
    name: "Add Junk",
    btnId: "#btn-addJunk",
    function: buildDOMJunkAdder
  }
];





//  button functions