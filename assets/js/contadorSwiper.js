
let botonSwiper = document.getElementById('botonRight');
let slidercontainer = document.getElementById('top');

let interval = setInterval(() => {
    botonSwiper.click();
}, 8000);

slidercontainer.addEventListener('click', () => {
    clearInterval(interval); // Clear the existing interval
    interval = setInterval(() => { // Restart the interval
        botonSwiper.click();
    }, 8000);
});
