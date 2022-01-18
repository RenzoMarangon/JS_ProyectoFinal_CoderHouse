const subCategorias = document.querySelector(".header-container__sub-ul");
const categorias = document.querySelector(".header-container__li__categorias");

categorias.addEventListener("mouseover",()=>{
    let altura = subCategorias.scrollHeight;
    subCategorias.style.height=altura+"px";
    subCategorias.style.overflow="visible";
});

categorias.addEventListener("mouseout",()=>{
    subCategorias.style.height=0+"px";
    subCategorias.style.overflow="hidden";
});


const containerArticulos = document.querySelector('#main-container__articulos');





const buscarNumero=(array)=>{
    return parseInt(Math.random()*array.length);
}

let listaArticulosInicio = []


const listaTele = JSON.parse(sessionStorage.getItem('televisores'));
const listaCompu = JSON.parse(sessionStorage.getItem('computadoras'));
const listaCel = JSON.parse(sessionStorage.getItem('celulares'));

// for(let i =0; i<9;i++){
//     if(i<3){
//         listaArticulosInicio.push(listaTele[buscarNumero(listaTele)])
//     }else if(i<6){
//         listaArticulosInicio.push(listaCompu[buscarNumero(listaCompu)])
//     }else{
//         listaArticulosInicio.push(listaCel[buscarNumero(listaCel)])
//     }
// }

for(let i = 0; i<3; i++){
    listaArticulosInicio.push(listaTele[i])
}

for(let i = 0; i<3; i++){
    listaArticulosInicio.push(listaCompu[i])
}

for(let i = 0; i<3; i++){
    listaArticulosInicio.push(listaCel[i])
}



for(let i = 0; i<listaArticulosInicio.length;i++){
    dibujarArticulo(listaArticulosInicio[i],containerArticulos);
    let caja = document.querySelector("#main-container__articulos").children[i]
    dibujarCartelOfertaEnvio(listaArticulosInicio[i],caja);
    
    // if(listaArticulosInicio[i].envioGratis==true){
    //     caja.firstChild.nextSibling.style.display="block";
    // }

    // if(listaArticulosInicio[i].oferta==true){
    //     caja.firstChild.nextSibling.nextSibling.nextSibling.style.display="block";
    // }
}






const buscador = document.querySelector('#header-container__li__input');
const lupa = document.querySelector('#header-container__li__buscar');

lupa.addEventListener('click',()=>{
    let listaBuscador = [];

    listaBuscador=listaBuscador.concat(listaCel.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));
    listaBuscador=listaBuscador.concat(listaTele.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));
    listaBuscador=listaBuscador.concat(listaCompu.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));

    containerArticulos.innerHTML='';

    for(let i = 0; i<listaBuscador.length;i++){
        dibujarArticulo(listaBuscador[i],containerArticulos);
        let caja = document.querySelector("#main-container__articulos").children[i]
        dibujarCartelOfertaEnvio(listaBuscador[i],caja);
    }

})

buscador.onchange=()=>{
    containerArticulos.innerHTML='';
    for(let i = 0; i<listaArticulosInicio.length;i++){
        dibujarArticulo(listaArticulosInicio[i],containerArticulos);
        let caja = document.querySelector("#main-container__articulos").children[i]
        dibujarCartelOfertaEnvio(listaArticulosInicio[i],caja);
    }
};

const botonAgregarCarrito = document.querySelectorAll('.boton');

botonAgregarCarrito.forEach((element)=>{
    element.addEventListener('click',()=>{
        agregarAlCarrito(element,listaArticulosInicio);
    })
})