var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output")
var language = document.querySelector("#languages");
const url = "https://api.funtranslations.com/translate/";

function getTranslationURL(text) {
    var selectedLanguage = language.options[language.selectedIndex].value;
    return url + selectedLanguage + ".json?" + "text=" +  text;
}

btnTranslate.addEventListener("click", function clickHandler() {
    // outputText.innerHTML = "Translated: " + txtInput.value;
    fetch(getTranslationURL(txtInput.value))
    .then(response => response.json())
    .then(json => { outputText.innerHTML = json.contents.translated})
    .catch(error => console.log("Error Occured" + error));
})