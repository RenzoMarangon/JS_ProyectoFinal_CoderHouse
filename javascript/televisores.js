//MOSTRAR TELEVISORES EN {televisores.html}

let containerTelevisores =  document.querySelector('#main-container__televisores');
const listaTeles = JSON.parse(sessionStorage.getItem('televisores'));

for(let i = 0; i<listaTeles.length;i++){
    dibujarArticulo(listaTeles[i],containerTelevisores);
    //BUSCO EL CONTENEDOR DE CADA OBJETO
    let caja = document.querySelector("#main-container__televisores").children[i]
    //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
    dibujarCartelOfertaEnvio(listaTeles[i],caja);
}

//BUSCAR TELEVISORES

const lupaTele = document.querySelector('#header-container__li__buscarTelevisores');
const buscador = document.querySelector('#header-container__li__inputTelevisores')



lupaTele.addEventListener('click',()=>{
    //FILTRO EL RESULTADO DE LA BUSQUEDA
    buscarElementos(buscador,listaTeles,containerTelevisores,"#main-container__televisores");
    funcionBotonAgregarAlCarrito(listaTeles);

})

//LO MISMO PERO TOCO ENTER
$(()=>{
    $(document).keypress(function(e){
        if(e.keyCode==13){
            buscarElementos(buscador,listaTeles,containerTelevisores,"#main-container__televisores");
            funcionBotonAgregarAlCarrito(listaTeles);
        }
    })
})

//CUANDO BORRAN EL CONTENIDO, BORRO LO QUE ESTE EN EL CONTAINER Y DIBUJO TODA LA LISTA D CELULARES
buscador.onchange=()=>{
    borrarResultadosBusqueda(containerTelevisores,listaTeles,"#main-container__televisores")
    funcionBotonAgregarAlCarrito(listaTeles);


}

funcionBotonAgregarAlCarrito(listaTeles);

