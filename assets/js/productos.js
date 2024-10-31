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
        idBotonVerMas.textContent='Ver Menos';
        contenedorProductos.style.height='fit-content';
        contenedorProductos.style.transition='transition: 1s ease-in-out';
    }
    else
    {
        idBotonVerMas.textContent='¡Ver Mas!'
        verMas=false;
        contenedorProductos.style.height=(cardProductoHeight+70)+'px'
    }
}

idBotonVerMas.addEventListener("click",handleVerMas);




//observando el about us

let animacionAboutUs=false;
let sectionAbout= document.getElementById('about');
let aboutUs1= document.getElementById('conocenosMejorPart1');
let aboutUs2= document.getElementById('conocenosMejorPart2');
function animacionMirar(isIntersecting)
{
    if (isIntersecting==true && animacionAboutUs==false)
    {
        animacionAboutUs=true; 
        aboutUs1.classList.toggle('animationRighttoLeft');
        aboutUs2.classList.toggle('animationLefttoRight');
    }

}

const observer = new IntersectionObserver(entries=>{
    animacionMirar(entries[0].isIntersecting);
},{})


observer.observe(sectionAbout)



// ver mas dentro del cardProduct

let allCardProduct = document.querySelectorAll('.cardProducto');
allCardProduct.forEach((producto) => {
    let botonVerMasTexto = producto.querySelector('.botonVerMasTexto'); 
    let bool= false;
    let contenedorTexto= producto.querySelector('.contenedorTexto');

    try {
        botonVerMasTexto.addEventListener('click', () => {
            if (!bool)
            {
                botonVerMasTexto.textContent='ver menos'
                bool=true;
                contenedorTexto.classList.toggle('cardProductoShowAll');

            }
            else
            {
                botonVerMasTexto.textContent='ver mas'
                bool= false;
                contenedorTexto.classList.toggle('cardProductoShowAll');
            }
        });
    } catch (error) {
        console.log(error);
    }
});
