//MOSTRAR CATEGORIAS

const subCategoriasHeader = document.querySelector(".header-container__sub-ul");
const categoriasHeader = document.querySelector(".header-container__li__categorias");

categoriasHeader.addEventListener("mouseover",()=>{
    let altura = subCategoriasHeader.scrollHeight;
    subCategoriasHeader.style.height=altura+"px";
    subCategoriasHeader.style.overflow="visible";
});

categoriasHeader.addEventListener("mouseout",()=>{
    subCategoriasHeader.style.height=0+"px";
    subCategoriasHeader.style.overflow="hidden";
});



//MOSTRAR LOS OBJETOS EN PANTALLA
const dibujarArticulo = (articulo,contenedor) =>{
    let nodo = document.createElement("article");
    nodo.innerHTML= 
    `
        <p class="envioGratis"><span>Envío gratis</span></p>
        <p class="oferta"><span>Oferta!</span></p>
        <h3>${articulo.nombre}</h3>
        <p class="equis">X</p>
        <img class="imagen" src="./img/${articulo.img}" alt="${articulo.img}">
        <p class="precio">$${articulo.precio}</p>
        <p class="descripcion">${articulo.descripcion}</p>
        <button class="boton">Agregar al carrito</button>
    `
    contenedor.appendChild(nodo);
}

//MOSTRAR CARTEL DE OFERTA Y ENVIO
const dibujarCartelOfertaEnvio = (articulo,caja)=>{
    if(articulo.envioGratis==true){
    caja.firstChild.nextSibling.style.display="block";
    }

    if(articulo.oferta==true){
        caja.firstChild.nextSibling.nextSibling.nextSibling.style.display="block";
    }
}

//ELIMINAR OBJETOS
const eliminarArticulo=(equisArticulo,listaObjetos,nombreListaStorage)=>{
    let articulo = equisArticulo.parentElement;
    let nombreArticulo = articulo.children[2].textContent;
    let precioArticulo = articulo.children[5].textContent.slice(1,articulo.children[5].length);
    let descripcionArticulo = articulo.children[6].textContent;
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
    
    
    let articulo = botonAgregar.parentElement;
    let nombreArticulo = articulo.children[2].textContent;
    let precioArticulo = articulo.children[5].textContent.slice(1,articulo.children[5].length);
    let descripcionArticulo = articulo.children[6].textContent;
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
}

