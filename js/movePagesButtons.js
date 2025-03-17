export function moveToSecondPage() {
    const firstPage = document.getElementById("first-page");
    const secondPage = document.getElementById("second-page");
    const nextPageButton = document.getElementById("next-page-button");

    nextPageButton.addEventListener("click", function () {
        firstPage.classList.add("switch-to-second-page");
        setTimeout(() => {
            firstPage.classList.remove("switch-to-second-page");
            firstPage.style.visibility = "hidden";
            firstPage.style.opacity = "0";
            secondPage.style.visibility = "visible";
            secondPage.style.opacity = "1";
        }, 1000);
    });
}

export function moveToFirstPage(){
    const firstPage = document.getElementById("first-page");
    const secondPage = document.getElementById("second-page");
    const prevPageButton = document.getElementById("previous-page-button");

    prevPageButton.addEventListener("click", function () {
        firstPage.classList.add("switch-to-first-page");
        firstPage.style.visibility = "visible";
        secondPage.style.opacity = "0";

        setTimeout(() => {
            firstPage.classList.remove("switch-to-first-page");
            secondPage.style.visibility = "hidden";
            secondPage.style.opacity = "0";
            firstPage.style.opacity = "1";
        }, 1000);
    });
};