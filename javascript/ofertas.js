const containerOfertas = document.querySelector('#main-container__ofertas');
const listaTeles = JSON.parse(sessionStorage.getItem('televisores'));
const listaCelus = JSON.parse(sessionStorage.getItem('celulares'));
const listaCompus = JSON.parse(sessionStorage.getItem('computadoras'));

let listaOfertas = [];


//AGREGO LOS ITEMS EN OFERTA A UN ARRAY
listaTeles.forEach((element)=>{
    if(element.oferta==true){
        listaOfertas.push(element);
    }
})

listaCelus.forEach((element)=>{
    if(element.oferta==true){
        listaOfertas.push(element);
    }
})

listaCompus.forEach((element)=>{
    if(element.oferta==true){
        listaOfertas.push(element);
    }
})

for(let i = 0; i<listaOfertas.length;i++){
    dibujarArticulo(listaOfertas[i],containerOfertas);
    let caja = document.querySelector("#main-container__ofertas").children[i]
    dibujarCartelOfertaEnvio(listaOfertas[i],caja);
}

let lupa = document.querySelector('#header-container__li__buscarOfertas');
let buscador = document.querySelector('#header-container__li__inputOfertas');

lupa.addEventListener('click',()=>{
    const busquedaOfertas = listaOfertas.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase()));
    containerOfertas.innerHTML='';
    for(let i = 0; i<busquedaOfertas.length;i++){
        dibujarArticulo(busquedaOfertas[i],containerOfertas);
        let caja = document.querySelector("#main-container__ofertas").children[i]
        dibujarCartelOfertaEnvio(busquedaOfertas[i],caja);
    }
});

buscador.onchange=()=>{
    containerOfertas.innerHTML='';
    for(let i = 0; i<listaOfertas.length;i++){
        dibujarArticulo(listaOfertas[i],containerOfertas);
        let caja = document.querySelector("#main-container__ofertas").children[i]
        dibujarCartelOfertaEnvio(listaOfertas[i],caja);
    }
};


const botonAgregarCarrito = document.querySelectorAll('.boton');

botonAgregarCarrito.forEach((element)=>{
    element.addEventListener('click',()=>{
        agregarAlCarrito(element,listaOfertas);
    })
})


