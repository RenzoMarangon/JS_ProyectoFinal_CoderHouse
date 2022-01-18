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
    const listaTele = listaTeles.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase()));
    containerTelevisores.innerHTML='';
    for(let i = 0; i<listaTele.length;i++){
        dibujarArticulo(listaTele[i],containerTelevisores);
        let caja = document.querySelector("#main-container__televisores").children[i]
        dibujarCartelOfertaEnvio(listaTele[i],caja);
    }
})

buscador.onchange=()=>{
    containerTelevisores.innerHTML='';
    for(let i = 0; i<listaTeles.length;i++){
        dibujarArticulo(listaTeles[i],containerTelevisores);
        //BUSCO EL CONTENEDOR DE CADA OBJETO
        let caja = document.querySelector("#main-container__televisores").children[i]
        //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
        dibujarCartelOfertaEnvio(listaTeles[i],caja);
    }
}



