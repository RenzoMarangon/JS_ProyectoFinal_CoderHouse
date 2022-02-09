
//GUARDO EL CONTAINER DONDE VAN A IR TODOS LOS ARTICULOS Y EL CONTENIDO DEL CARRITO
const containerCarrito = document.querySelector('#main-container__carrito');
let listaObjetosCarrito = JSON.parse(localStorage.getItem('carrito'));

//DIBUJO EL CONTENIDO DEL CARRITO Y LE DIBUJO LOS CARTELES
for(let i = 0; i<listaObjetosCarrito.length;i++){
    dibujarArticulo(listaObjetosCarrito[i],containerCarrito)
    let caja = document.querySelector('#main-container__carrito').children[i];
    dibujarCartelOfertaEnvio(listaObjetosCarrito[i],caja);
    eliminarElementosCarritoVenta(listaObjetosCarrito,"carrito");
}

//SUMO LOS PRECIOS DE LOS ARTICULOS VENDIDOS
let articulosVendidos = containerCarrito.children;
let total = 0;
for(let i = 0; i<articulosVendidos.length;i++){
    let precioArticulo = parseInt(articulosVendidos[i].children[0].children[5].textContent.slice(1))
    
    total+=precioArticulo;

}

if(total==0){
    let costoFinal = document.createElement("article");
    costoFinal.innerHTML=`
    <div class="articulos__precio-total">
        <p class="sin-articulos">No hay articulos comprados</p>
    </div>
    `;
    containerCarrito.appendChild(costoFinal)
}else{
    let costoFinal = document.createElement("article");
    costoFinal.innerHTML=`
        <div class="articulos__precio-total">
            <p>Total:</p>
            <p class="precio-total">$${total}</p>
            <button>Finalizar compra</button>
        </div>
    `;
    containerCarrito.appendChild(costoFinal)
}


//SI BORRO UN ITEM DEL CARRITO VUELVO A ACTUALIZAR EL PRECIO
$('body').on('DOMSubtreeModified', '#main-container__carrito', function(){
    let total = 0;
    for(let i = 0; i<articulosVendidos.length-1;i++){
        let precioArticulo = parseInt(articulosVendidos[i].children[0].children[5].textContent.slice(1))
        total+=precioArticulo;
    
    }
    document.querySelector(".precio-total").textContent="$"+total;

    if(articulosVendidos.length==1){
        containerCarrito.innerHTML=`
        <div class="articulos__precio-total">
            <p class="sin-articulos">No hay articulos comprados</p>
        </div>`
    }

});


//BORRO EL BUSCADOR
document.querySelector('.header-container__li__input').style.display="none";



//SUMAR O RESTAR ITEMS DENTRO DEL CARRITO
const sumar = document.querySelectorAll(".sumar");
const restar = document.querySelectorAll(".restar");
let cantidadDeArticulos = document.querySelectorAll(".numero");
let contenedorPrecioDelArticulo = document.querySelectorAll(".precio");
let precioFijo = []
for(element of listaObjetosCarrito){
    precioFijo.push(element.precio)
}
console.log(precioFijo)


for(let i=0; i<sumar.length;i++){
    cantidadDeArticulos[i].innerHTML="1";
    
    sumar[i].onclick=()=>{
        let precioDelArticulo = precioFijo[i]
        let cantidad = parseInt(cantidadDeArticulos[i].textContent);
        cantidad+=1;
        cantidadDeArticulos[i].innerHTML=cantidad;
        let precioTotal = precioDelArticulo*cantidad;
    
        contenedorPrecioDelArticulo[i].innerHTML="$"+precioTotal; 
    
    }

    restar[i].onclick=()=>{
        let cantidad = parseInt(cantidadDeArticulos[i].textContent);
        if(cantidad>1){
            let precioDelArticulo = precioFijo[i]
            
            cantidad-=1;
            cantidadDeArticulos[i].innerHTML=cantidad;
            let precioTotal = precioDelArticulo*cantidad;
        
            contenedorPrecioDelArticulo[i].innerHTML="$"+precioTotal; 
        }
    }
}


//MUESTRO LA EQUIS AL HACER HOVER

const articulosEnElCarrito = document.querySelectorAll("article");
console.log(articulosEnElCarrito[0].children[0].children[3])
for(let i=0; i<articulosEnElCarrito.length-1;i++){
    articulosEnElCarrito[i].onmouseover=()=>{
        articulosEnElCarrito[i].style.background="#6373812a"
        articulosEnElCarrito[i].children[0].children[3].style.display="block"
    }

    articulosEnElCarrito[i].onmouseout=()=>{
        articulosEnElCarrito[i].style.background="none"
        articulosEnElCarrito[i].children[0].children[3].style.display="none"
    }
}




//PREGUNTO SI DENTRO DEL CARRITO HAY IMAGENES DE CELULAR O NOTEBOOK
const imgCelulares = document.querySelectorAll(".cara-delantera");

if(document.body.clientWidth>750 && document.body.clientWidth<900){
    imgCelulares.forEach((imagen)=>{
        let img = imagen.childNodes[9];
    
       img.style.display="none";
    
    })
    console.log("true")
}


    













