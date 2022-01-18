
//GUARDO EL CONTAINER DONDE VAN A IR TODOS LOS ARTICULOS Y EL CONTENIDO DEL CARRITO
const containerCarrito = document.querySelector('#main-container__carrito');
let listaObjetosCarrito = JSON.parse(localStorage.getItem('carrito'));

//DIBUJO EL CONTENIDO DEL CARRITO Y LE DIBUJO LOS CARTELES
for(let i = 0; i<listaObjetosCarrito.length;i++){
    dibujarArticulo(listaObjetosCarrito[i],containerCarrito)
    let caja = document.querySelector('#main-container__carrito').children[i];
    dibujarCartelOfertaEnvio(listaObjetosCarrito[i],caja);
}

//BUSCO TODOS LOS BOTONES QUE TIENEN LA "x"
const equis = document.querySelectorAll('.equis');

//AGREGO LA FUNCION ELIMINAR ARTICULO A CADA UNO
equis.forEach((element)=>{
    element.addEventListener('click',()=>{
        eliminarArticulo(element,listaObjetosCarrito,'carrito');
    });

    
});


//BUSCO LA IMAGEN DE LA LUPA Y EL INPUT DE BUSCAR
const buscarEnCarrito = document.querySelector('#header-container__li__inputCarrito');
const lupaCarrito = document.querySelector('#header-container__li__buscarCarrito');

lupaCarrito.addEventListener('click',()=>{
    //FILTRO LOS OBJETOS DEL CARRITO QUE TENGAN LA CATEGORIA O EL NOMBRE, ELIMINO LO QUE TIENE EL CONTENEDOR Y LE DIBUJO EL RESUTLTADO DE LA BUSQUEDA
    const listaCarrito = listaObjetosCarrito.filter(element=>element.categoria.toLowerCase().includes(buscarEnCarrito.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscarEnCarrito.value.toLowerCase()));
    containerCarrito.innerHTML='';
    for(let i = 0; i<listaCarrito.length;i++){
        dibujarArticulo(listaCarrito[i],containerCarrito);
        let caja = document.querySelector("#main-container__televisores").children[i]
        dibujarCartelOfertaEnvio(listaCarrito[i],caja);
    }
})


//CUANDO ELIMINAN LO QUE ESTA ESCRITO VUELVO A ELIMINAR LO QUE TIENE EL CONTENEDOR Y DIBUJO EL CONTENEDOR DEL CARRITO
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

