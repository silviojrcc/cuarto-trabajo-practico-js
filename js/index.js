function main() {

    const sectionEjercicioEl = document.querySelector(".section-ejercicio");
    const buttons = document.querySelectorAll(".btn-ejercicio");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
        const ejercicio = button.getAttribute("data-ejercicio");
        sectionEjercicioEl.innerHTML = ``;
        window[ejercicio](sectionEjercicioEl);
    });

});
}

main();