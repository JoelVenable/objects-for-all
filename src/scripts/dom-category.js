const categoryDom = (obj) => {
    return `<div>
                <span>${obj.name}</span>
                <span>${obj.id}</span>
            </div>`;
};

const listCategoryContents = (junkArray) => {
  let contents = "";
  junkArray.forEach(item => contents += `<li>${item.name}</li>`);
  return contents;
  }


const buildCategoryDom = (data) => {
    mainContainer.innerHTML = "";
    data.forEach(element => {
        mainContainer.innerHTML += categoryDom(element);
    });
};

const buildCategoryDetailDom = (data) => {
    console.log("data", data);
    mainContainer.innerHTML = "";
    data.forEach(object => {
    mainContainer.innerHTML += `
      <div>
        <h2>${object.name}</h2>
        <ul>${listCategoryContents(object.junk)}
        </ul>
      </div>`;
  });
};

