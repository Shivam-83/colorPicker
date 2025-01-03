let bgContainer = document.getElementById("colorPickerContainer");
let displayColorCode = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
    bgContainer.style.backgroundColor = "#e0e0e0";
    displayColorCode.textContent = "#e0e0e0";
    displayColorCode.style.color = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    bgContainer.style.backgroundColor = "#6fcf97";
    displayColorCode.textContent = "#6fcf97";
    displayColorCode.style.color = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    bgContainer.style.backgroundColor = "#56ccf2";
    displayColorCode.textContent = "#56ccf2";
    displayColorCode.style.color = "#56ccf2";
}

function changeBgToPinkAndUpdateText() {
    bgContainer.style.backgroundColor = "#bb6bd9";
    displayColorCode.textContent = "#bb6bd9";
    displayColorCode.style.color = "#bb6bd9";
}