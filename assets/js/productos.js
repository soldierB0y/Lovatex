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

