import { showExperienceDescription } from "./js/showExperiencesDescription.js";
import { loadExperiencesLines } from "./js/loadExperiencesLines.js";
import { moveToSecondPage, moveToFirstPage } from "./js/movePagesButtons.js";

document.addEventListener("DOMContentLoaded", () => {  
    loadExperiencesLines();
    showExperienceDescription();
    moveToFirstPage();
    moveToSecondPage();
});