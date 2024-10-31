


let botonSwiper = document.getElementById('botonRight');
let slidercontainer= document.getElementById('top');



const interval = setInterval(() => {
    botonSwiper.click();
}, 8000);


slidercontainer.addEventListener('click',()=>{
  clearInterval(interval);
  interval = setInterval(() => {
    botonSwiper.click();
}, 8000);
    
})
// To stop the interval, you can use clearInterval(interval) when needed.
