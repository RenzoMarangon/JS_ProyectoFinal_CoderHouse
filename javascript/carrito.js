const containerCarrito = document.querySelector('#main-container__carrito');
let listaObjetosCarrito = JSON.parse(localStorage.getItem('carrito'));


for(let i = 0; i<listaObjetosCarrito.length;i++){
    dibujarArticulo(listaObjetosCarrito[i],containerCarrito)
    let caja = document.querySelector('#main-container__carrito').children[i];
    dibujarCartelOfertaEnvio(listaObjetosCarrito[i],caja);


    let botonBorrar = document.querySelectorAll('.equis');
}


const equis = document.querySelectorAll('.equis');

equis.forEach((element)=>{
    element.addEventListener('click',()=>{
        eliminarArticulo(element,listaObjetosCarrito,'carrito');
    });
});

const buscarEnCarrito = document.querySelector('#header-container__li__inputCarrito');
const lupaCarrito = document.querySelector('#header-container__li__buscarCarrito');

lupaCarrito.addEventListener('click',()=>{
    const listaCarrito = listaObjetosCarrito.filter(element=>element.categoria.toLowerCase().includes(buscarEnCarrito.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscarEnCarrito.value.toLowerCase()));
    containerCarrito.innerHTML='';
    for(let i = 0; i<listaCarrito.length;i++){
        dibujarArticulo(listaCarrito[i],containerCarrito);
        let caja = document.querySelector("#main-container__televisores").children[i]
        dibujarCartelOfertaEnvio(listaCarrito[i],caja);
    }
})

buscarEnCarrito.onchange=()=>{
    containerCarrito.innerHTML='';
    for(let i = 0; i<listaObjetosCarrito.length;i++){
        dibujarArticulo(listaObjetosCarrito[i],containerCarrito);
        //BUSCO EL CONTENEDOR DE CADA OBJETO
        let caja = document.querySelector("#main-container__carrito").children[i]
        //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
        dibujarCartelOfertaEnvio(listaObjetosCarrito[i],caja);
    }
}

