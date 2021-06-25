let sliders = document.querySelectorAll('.slide');
let acum = 0
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');

next.onclick = function() {
    acum++
    if (acum === 5) {
        acum = 0
    }
    for (let i in sliders) {
        sliders[i].style.transform = "translateX(-" + acum + "00%)"
    }

}

previous.onclick = function() {
    acum--
    if (acum === -1) {
        acum = 4
    }
    for (let i in sliders) {
        sliders[i].style.transform = "translateX(-" + acum + "00%)"
    }

}