export function loadExperiencesLines() {
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