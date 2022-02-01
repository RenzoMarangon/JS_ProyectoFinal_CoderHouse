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
    //FILTRO EL RESULTADO DE LA BUSQUEDA
    buscarElementos(buscador,listaOfertas,containerOfertas,"#main-container__ofertas");
    funcionBotonAgregarAlCarrito(listaOfertas)

})

//LO MISMO PERO TOCO ENTER
$(()=>{
    $(document).keypress(function(e){
        if(e.keyCode==13){
            buscarElementos(buscador,listaOfertas,containerOfertas,"#main-container__ofertas");
            funcionBotonAgregarAlCarrito(listaOfertas)
            
        }
    })
})

//CUANDO BORRAN EL CONTENIDO, BORRO LO QUE ESTE EN EL CONTAINER Y DIBUJO TODA LA LISTA D CELULARES
buscador.onchange=()=>{
    borrarResultadosBusqueda(containerTelevisores,listaOfertas,"#main-container__televisores")
    funcionBotonAgregarAlCarrito(listaOfertas)

}

funcionBotonAgregarAlCarrito(listaOfertas)



