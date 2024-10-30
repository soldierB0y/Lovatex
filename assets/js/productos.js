let verMas= false;
let idBotonVerMas= document.getElementById('idBotonVerMas');
let contenedorProductos= document.getElementById('contenedorProductosCard');
let cardProducto= document.getElementById('cardProducto');
let cardProductoHeight= cardProducto.clientHeight;
contenedorProductos.clientHeight= cardProductoHeight;
contenedorProductos.style.height=(cardProductoHeight+70)+'px';


function handleVerMas()
{
    if(verMas==false)
    {
        verMas=true;
        contenedorProductos.style.height='fit-content';
        contenedorProductos.style.transition='transition: 1s ease-in-out';
    }
    else
    {
        verMas=false;
        contenedorProductos.style.height=(cardProductoHeight+70)+'px'
    }
}

idBotonVerMas.addEventListener("click",handleVerMas);




//Estas observando el about us?

let animacionAboutUs=false;
let sectionAbout= document.getElementById('about');
let aboutUs1= document.getElementById('conocenosMejorPart1');
let aboutUs2= document.getElementById('conocenosMejorPart2');
function animacionMirar(isIntersecting)
{
    if (isIntersecting==true && animacionAboutUs==false)
    {
        animacionAboutUs=true; 
        aboutUs1.classList.toggle('animationLefttoRight');
        aboutUs2.classList.toggle('animationRighttoLeft');
    }

}

const observer = new IntersectionObserver(entries=>{
    animacionMirar(entries[0].isIntersecting);
},{})


observer.observe(sectionAbout)