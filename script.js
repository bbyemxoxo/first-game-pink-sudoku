let vybranePolicko = null;

document.querySelectorAll("#sudoku input").forEach(policko => {
    policko.addEventListener("click", () => {
        if (!policko.disabled) {
            vybranePolicko = policko;
        }
    });
});

function vlozitCislo(cislo) {
    if (vybranePolicko !== null) {
        vybranePolicko.value = cislo;
    }
}
function smazatCislo() {
    if (vybranePolicko !== null) {
        vybranePolicko.value = "";
    }
}