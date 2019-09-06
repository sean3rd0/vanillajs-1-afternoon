let idInput = document.getElementById("idInput");
let colorInput = document.getElementById("colorInput");

function setCard () {
    const cardElement = document.getElementById(idInput.value);
    cardElement.style.color = colorInput.value;
}