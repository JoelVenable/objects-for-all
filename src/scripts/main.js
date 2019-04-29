




for (const key in buttons) {
  let btnContainer = document.querySelector("#buttons");
  if (buttons.hasOwnProperty(key)) {
    const button = buttons[key];
    // add button to dom
    let btn = document.createElement("button");
    btn.textContent = button.name;
    btn.id = button.btnId;
    btnContainer.appendChild(btn);

    // add event listeners
    btn.addEventListener("click", button.function);
  }
}
const mainContainer = document.querySelector("#container");






