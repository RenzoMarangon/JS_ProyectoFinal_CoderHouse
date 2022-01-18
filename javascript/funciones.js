//MOSTRAR CATEGORIAS

$(".header-container__li__categorias").on("mouseover",function(){
    
    $(".header-container__sub-ul").css({
        "height":"75px",
        "overflow":"visible",
    })

    
})


$(".header-container__li__categorias").on("mouseout",function(){
    $(".header-container__sub-ul").css({
        "height":"0",
        "overflow":"hidden"
    })
})
    




//MOSTRAR LOS OBJETOS EN PANTALLA
const dibujarArticulo = (articulo,contenedor) =>{
    let nodo = document.createElement("article");
    nodo.innerHTML= 
    `
        <div class="cara-delantera">
            <p class="envioGratis"><span>Envío gratis</span></p>
            <p class="oferta"><span>Oferta!</span></p>
            <h3>${articulo.nombre}</h3>
            <p class="equis">X</p>
            <img class="imagen" src="./img/${articulo.img}" alt="${articulo.img}">
            <p class="precio">$${articulo.precio}</p>
            <p class="descripcion">${articulo.descripcion}</p>
            <button class="boton">Agregar al carrito</button>
        </div>

        <div class="cara-trasera">
            <img src="./img/checked.png">
            <p>El producto se agregó correctamente al carrito.</p>
        </div>
    `
    contenedor.appendChild(nodo);
}

//MOSTRAR CARTEL DE OFERTA Y ENVIO
const dibujarCartelOfertaEnvio = (articulo,caja)=>{
    if(articulo.envioGratis==true){
    caja.children[0].firstChild.nextSibling.style.display="block";
    }

    if(articulo.oferta==true){
        caja.children[0].firstChild.nextSibling.nextSibling.nextSibling.style.display="block";
    }
}



//ELIMINAR OBJETOS
const eliminarArticulo=(equisArticulo,listaObjetos,nombreListaStorage)=>{
    let articulo = equisArticulo.parentElement.parentElement;
    let nombreArticulo = articulo.children[0].children[2].textContent;
    let precioArticulo = articulo.children[0].children[5].textContent.slice(1,articulo.children[0].children[5].length);
    let descripcionArticulo = articulo.children[0].children[6].textContent;
    let contenedorPadre = articulo.parentElement;
    let objetoArticulo = listaObjetos.find(e => e.nombre == nombreArticulo && e.precio == precioArticulo && e.descripcion == descripcionArticulo);
    let posicion = listaObjetos.indexOf(objetoArticulo);

    contenedorPadre.removeChild(articulo)

    if(posicion!==-1){
        listaObjetos.splice(posicion,1)
    }
    
    localStorage.setItem(nombreListaStorage,JSON.stringify(listaObjetos));

   
}

//AGREGAR AL CARRITO

const agregarAlCarrito=(botonAgregar,listaArticulosStorage)=>{
    
    
    let articulo = botonAgregar.parentElement.parentElement;
    let nombreArticulo = articulo.children[0].children[2].textContent;
    let precioArticulo = articulo.children[0].children[5].textContent.slice(1,articulo.children[0].children[5].length);
    let descripcionArticulo = articulo.children[0].children[6].textContent;
    let objetoArticulo = listaArticulosStorage.find(e => e.nombre == nombreArticulo && e.precio == precioArticulo && e.descripcion == descripcionArticulo);
   
    
    let arrayObjetosCarrito = []
    let listaCarrito = JSON.parse(localStorage.getItem('carrito'));
    
    
    if(listaCarrito == null){
        arrayObjetosCarrito.push(objetoArticulo);
        localStorage.setItem('carrito',JSON.stringify(arrayObjetosCarrito))
        
    }else{
        arrayObjetosCarrito=arrayObjetosCarrito.concat(listaCarrito);
        arrayObjetosCarrito.push(objetoArticulo);
        localStorage.setItem('carrito',JSON.stringify(arrayObjetosCarrito))
        
    }
    articulo.children[1].style.overflow="show"
    articulo.children[1].style.height="100%";

    
    articulo.style.transform = "rotateY(180deg)";
}

