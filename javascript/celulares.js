//TRAIGO EL CONTENEDOR DONDE VAN A IR DIBUJADOS LOS ARTICULOS Y LA LISTA

let containerCelulares =  document.querySelector('#main-container__celulares');
const listaCelus = JSON.parse(sessionStorage.getItem('celulares'));


for(let i = 0; i<listaCelus.length;i++){
    dibujarArticulo(listaCelus[i],containerCelulares);
    //BUSCO EL CONTENEDOR DE CADA OBJETO
    let caja = document.querySelector("#main-container__celulares").children[i]
    //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
    dibujarCartelOfertaEnvio(listaCelus[i],caja);

    mostrarOcultarBoton(caja);
}

//BUSCAR CELULARES

const lupaCelu = document.querySelector('#header-container__li__buscarCelulares');
const buscador = document.querySelector('#header-container__li__inputCelulares')


lupaCelu.addEventListener('click',()=>{
    //FILTRO EL RESULTADO DE LA BUSQUEDA
    buscarElementos(buscador,listaCelus,containerCelulares,"#main-container__celulares");
    funcionBotonAgregarAlCarrito(listaCelus);

    containerCelulares.childNodes.forEach(article => {
        mostrarOcultarBoton(article);
    });
})

//LO MISMO PERO TOCO ENTER
$(()=>{
    $(document).keypress(function(e){
        if(e.keyCode==13){
            buscarElementos(buscador,listaCelus,containerCelulares,"#main-container__celulares");
            funcionBotonAgregarAlCarrito(listaCelus);

            containerCelulares.childNodes.forEach(article => {
                mostrarOcultarBoton(article);
            });
        }
    })
})

//CUANDO BORRAN EL CONTENIDO, BORRO LO QUE ESTE EN EL CONTAINER Y DIBUJO TODA LA LISTA D CELULARES
buscador.onchange=()=>{
    borrarResultadosBusqueda(containerCelulares,listaCelus,"#main-container__celulares")
    funcionBotonAgregarAlCarrito(listaCelus);

    containerCelulares.childNodes.forEach(article => {
        mostrarOcultarBoton(article);
    });
}

funcionBotonAgregarAlCarrito(listaCelus);


