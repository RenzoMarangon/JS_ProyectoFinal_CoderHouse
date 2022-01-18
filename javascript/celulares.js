//MOSTRAR CELULARES EN {celulares.html}

let containerCelulares =  document.querySelector('#main-container__celulares');
const listaCelus = JSON.parse(sessionStorage.getItem('celulares'));

//MOSTRAR CELULARES EN {celulares.html}

for(let i = 0; i<listaCelus.length;i++){
    dibujarArticulo(listaCelus[i],containerCelulares);
    //BUSCO EL CONTENEDOR DE CADA OBJETO
    let caja = document.querySelector("#main-container__celulares").children[i]
    //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
    dibujarCartelOfertaEnvio(listaCelus[i],caja);
}

//BUSCAR CELULARES

const lupaCelu = document.querySelector('#header-container__li__buscarCelulares');
const buscador = document.querySelector('#header-container__li__inputCelulares')

lupaCelu.addEventListener('click',()=>{
    const listaPC = listaCelus.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase()));
    containerCelulares.innerHTML='';
    for(let i = 0; i<listaPC.length;i++){
        dibujarArticulo(listaPC[i],containerCelulares);
        let caja = document.querySelector("#main-container__celulares").children[i]
        dibujarCartelOfertaEnvio(listaPC[i],caja);
    }
})

buscador.onchange=()=>{
    containerCelulares.innerHTML='';
    for(let i = 0; i<listaCelus.length;i++){
        dibujarArticulo(listaCelus[i],containerCelulares);
        //BUSCO EL CONTENEDOR DE CADA OBJETO
        let caja = document.querySelector("#main-container__celulares").children[i]
        //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
        dibujarCartelOfertaEnvio(listaCelus[i],caja);
    }
}



