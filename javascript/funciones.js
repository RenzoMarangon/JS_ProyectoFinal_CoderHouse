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
            <div class="sumar-restar">
                <p class="restar">-</p>
                <p class="numero"></p>
                <p class="sumar">+</p>
            </div>
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

//BUSCAR ELEMENTOS AL HACER CLICK EN LA LUPA
const buscarElementos = (inputBuscador, listaElementos,containerElementos,containerHTMLElementos)=>{
    const lista = listaElementos.filter(element=>element.categoria.toLowerCase().includes(inputBuscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(inputBuscador.value.toLowerCase()));
    containerElementos.innerHTML='';
    for(let i = 0; i<lista.length;i++){
        dibujarArticulo(lista[i],containerElementos);
        let caja = document.querySelector(containerHTMLElementos).children[i]
        dibujarCartelOfertaEnvio(lista[i],caja);
    }
}


//BORRAR LOS RESULTADOS DE LA BUSQUEDA
const borrarResultadosBusqueda = (containerElementos,listaElementos,containerHTMLElementos) =>{
    containerElementos.innerHTML='';
    for(let i = 0; i<listaElementos.length;i++){
        dibujarArticulo(listaElementos[i],containerElementos);
        let caja = document.querySelector(containerHTMLElementos).children[i]
        dibujarCartelOfertaEnvio(listaElementos[i],caja);
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
//MOSTRAR/QUITAR EQUIS DEL ARTICULO
const mostrarQuitarEquis=(element)=>{
    element.addEventListener("mouseover",()=>{
        element.children[0].children[3].style.display="block"
    })
    
    element.addEventListener("mouseout",()=>{
        element.children[0].children[3].style.display="none"
    })
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

    //ANIMACION DE LA CARTA
    articulo.style.transform = "rotateY(180deg)";
}


//FUNCION PARA EL BOTON "agregar al carrito"
const funcionBotonAgregarAlCarrito=(lista)=>{
    const botonAgregar = document.querySelectorAll('.boton');
    botonAgregar.forEach((element)=>{
        element.addEventListener('click',()=>{
            agregarAlCarrito(element,lista);
        })
    })
}

//FUNCION PARA BORRAR ELEMENTO
const eliminarElementosCarritoVenta=(lista,listaLocalStorage)=>{
    const equis = document.querySelectorAll('.equis');
    equis.forEach((element)=>{
        element.addEventListener('click',()=>{
        eliminarArticulo(element,lista,listaLocalStorage);
    });
});
}