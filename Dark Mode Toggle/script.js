const inputElement = document.querySelector("input");
const bodyElement = document.querySelector("body");

inputElement.checked = false;
update();
function update() {
    if (inputElement.checked) {
        bodyElement.style.background = "Black";
    }
    else {
        bodyElement.style.background = "white";
    }
}

inputElement.addEventListener("input", () => {
    update();
})
