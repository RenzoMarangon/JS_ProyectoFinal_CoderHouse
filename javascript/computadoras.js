//MOSTRAR COMPUTADORAS EN {computadoras.html}

let containerComputadoras =  document.querySelector('#main-container__computadoras');
const listaCompus = JSON.parse(sessionStorage.getItem('computadoras'));

for(let i = 0; i<listaCompus.length;i++){
    dibujarArticulo(listaCompus[i],containerComputadoras);
    //BUSCO EL CONTENEDOR DE CADA OBJETO
    let caja = document.querySelector("#main-container__computadoras").children[i]
    //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
    dibujarCartelOfertaEnvio(listaCompus[i],caja);

    mostrarOcultarBoton(caja);
}

//BUSCAR COMPUTADORAS

const lupa = document.querySelector('#header-container__li__buscarComputadoras');
const buscador = document.querySelector('#header-container__li__inputComputadoras')


//AL TOCAR LA LUPA FILTRO EL RESULTADO DE LA BUSQUEDA
lupa.addEventListener('click',()=>{
    buscarElementos(buscador,listaCompus,containerComputadoras,"#main-container__computadoras");
    funcionBotonAgregarAlCarrito(listaCompus);

    containerComputadoras.childNodes.forEach(article => {
        mostrarOcultarBoton(article);
    });
})

//LO MISMO PERO TOCO ENTER
$(()=>{
    $(document).keypress(function(e){
        if(e.keyCode==13){
            buscarElementos(buscador,listaCompus,containerComputadoras,"#main-container__computadoras");
            funcionBotonAgregarAlCarrito(listaCompus);

            containerComputadoras.childNodes.forEach(article => {
                mostrarOcultarBoton(article);
            });
        }
    })
})



buscador.onchange=()=>{

    borrarResultadosBusqueda(containerComputadoras,listaCompus,"#main-container__computadoras")
    funcionBotonAgregarAlCarrito(listaCompus);

    containerComputadoras.childNodes.forEach(article => {
        mostrarOcultarBoton(article);
    });
}


funcionBotonAgregarAlCarrito(listaCompus);




