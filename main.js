document.addEventListener("DOMContentLoaded", () => {  
    loadExperiencesLines();
    showExperienceDescription();
});

function loadExperiencesLines() {
    // Animation de la ligne et des points et des cartes/dates de la section Experiences 
     // Sélection des éléments à animer
    const line = document.getElementById("animated-line");
    const p1 = document.querySelector(".point1");
    const p2 = document.querySelector(".point2");
    const p3 = document.querySelector(".point3");
    const p4 = document.querySelector(".point4");

    line.classList.add("reveal-line");

    setTimeout(() => {
        p1.classList.add("reveal-point");
    }, 2500);
    setTimeout(() => {
        p2.classList.add("reveal-point");
    }, 3500);
    setTimeout(() => {
        p3.classList.add("reveal-point");
    }, 4500);
    setTimeout(() => {
        p4.classList.add("reveal-point");
    }, 5500);
};

function showExperienceDescription() {
    // Sélection des éléments à animer
    const devLogo = document.getElementById("dev-logo");
    const p1 = document.querySelector(".point1");
    const p2 = document.querySelector(".point2");
    const p3 = document.querySelector(".point3");
    const p4 = document.querySelector(".point4");
    const descriptionSubotai = document.getElementById("description-subotai");
    const descriptionTubauto = document.getElementById("description-tubauto");
    const descriptionAuchan = document.getElementById("description-auchan");
    const descriptionInterim = document.getElementById("description-interim");
    const closeSubotai = document.getElementById("description-close-button-subotai");
    const closeTubauto = document.getElementById("description-close-button-tubauto");
    const closeAuchan = document.getElementById("description-close-button-auchan");
    const closeInterim = document.getElementById("description-close-button-interim");
    const othersInformations = document.getElementById("others-informations");
    const rcLeft = document.getElementById("rc-left");

    console.log(p1)

    p1.addEventListener("click", function ()  {
        console.log("test");
        descriptionSubotai.style.visibility = "visible";
        descriptionSubotai.style.opacity = "1";
        devLogo.style.visibility = "hidden";
        othersInformations.style.opacity = "0.3";
        rcLeft.style.opacity = "0.3";
        p2.style.pointerEvents = "none";
        p3.style.pointerEvents = "none";
        p4.style.pointerEvents = "none";
    });

    closeSubotai.addEventListener("click", function () {
        descriptionSubotai.style.opacity = "0";
        descriptionSubotai.style.visibility = "hidden";
        devLogo.style.visibility = "visible";
        othersInformations.style.opacity = "1";
        rcLeft.style.opacity = "1";
        p2.style.pointerEvents = "auto";
        p3.style.pointerEvents = "auto";
        p4.style.pointerEvents = "auto";
    });

    p2.addEventListener("click", function () {
        descriptionTubauto.style.visibility = "visible";
        descriptionTubauto.style.opacity = "1";
        devLogo.style.visibility = "hidden";
        othersInformations.style.opacity = "0.3";
        rcLeft.style.opacity = "0.3";
        p1.style.pointerEvents = "none";
        p3.style.pointerEvents = "none";
        p4.style.pointerEvents = "none";
    });

    closeTubauto.addEventListener("click", function ()  {
        descriptionTubauto.style.opacity = "0";
        descriptionTubauto.style.visibility = "hidden";
        devLogo.style.visibility = "visible";
        othersInformations.style.opacity = "1";
        rcLeft.style.opacity = "1";
        p1.style.pointerEvents = "auto";
        p3.style.pointerEvents = "auto";
        p4.style.pointerEvents = "auto";
    });

    p3.addEventListener("click", function ()  {
        descriptionAuchan.style.visibility = "visible";
        descriptionAuchan.style.opacity = "1";
        devLogo.style.visibility = "hidden";
        othersInformations.style.opacity = "0.3";
        rcLeft.style.opacity = "0.3";
        p1.style.pointerEvents = "none";
        p2.style.pointerEvents = "none";
        p4.style.pointerEvents = "none";
    });

    closeAuchan.addEventListener("click", function ()  {
        descriptionAuchan.style.opacity = "0";
        descriptionAuchan.style.visibility = "hidden";
        devLogo.style.visibility = "visible";
        othersInformations.style.opacity = "1";
        rcLeft.style.opacity = "1";
        p1.style.pointerEvents = "auto";
        p2.style.pointerEvents = "auto";
        p4.style.pointerEvents = "auto";
    });

    p4.addEventListener("click", function () {
        descriptionInterim.style.visibility = "visible";
        descriptionInterim.style.opacity = "1";
        devLogo.style.visibility = "hidden";
        othersInformations.style.opacity = "0.3";
        rcLeft.style.opacity = "0.3";
        p1.style.pointerEvents = "none";
        p2.style.pointerEvents = "none";
        p3.style.pointerEvents = "none";
    });

    closeInterim.addEventListener("click", function ()  {
        descriptionInterim.style.opacity = "0";
        descriptionInterim.style.visibility = "hidden";
        devLogo.style.visibility = "visible";
        othersInformations.style.opacity = "1";
        rcLeft.style.opacity = "1";
        p1.style.pointerEvents = "auto";
        p2.style.pointerEvents = "auto";
        p3.style.pointerEvents = "auto";
    });
}