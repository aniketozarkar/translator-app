var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output")

btnTranslate.addEventListener("click", function clickHandler() {
    outputText.innerHTML = "Translated: " + txtInput.value;
})