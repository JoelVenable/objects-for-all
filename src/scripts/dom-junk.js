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