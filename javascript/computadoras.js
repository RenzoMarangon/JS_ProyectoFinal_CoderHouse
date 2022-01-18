//MOSTRAR COMPUTADORAS EN {computadoras.html}

let containerComputadoras =  document.querySelector('#main-container__computadoras');
const listaCompus = JSON.parse(sessionStorage.getItem('computadoras'));

for(let i = 0; i<listaCompus.length;i++){
    dibujarArticulo(listaCompus[i],containerComputadoras);
    //BUSCO EL CONTENEDOR DE CADA OBJETO
    let caja = document.querySelector("#main-container__computadoras").children[i]
    //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
    dibujarCartelOfertaEnvio(listaCompus[i],caja);
}

//BUSCAR COMPUTADORAS

const lupa = document.querySelector('#header-container__li__buscarComputadoras');
const buscador = document.querySelector('#header-container__li__inputComputadoras')

lupa.addEventListener('click',()=>{
    const listaPC = listaCompus.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase()));
    containerComputadoras.innerHTML='';
    for(let i = 0; i<listaPC.length;i++){
        dibujarArticulo(listaPC[i],containerComputadoras);
        let caja = document.querySelector("#main-container__computadoras").children[i]
        dibujarCartelOfertaEnvio(listaPC[i],caja);
    }
})

buscador.onchange=()=>{
    containerComputadoras.innerHTML='';
    for(let i = 0; i<listaCompus.length;i++){
        dibujarArticulo(listaCompus[i],containerComputadoras);
        //BUSCO EL CONTENEDOR DE CADA OBJETO
        let caja = document.querySelector("#main-container__computadoras").children[i]
        //EN CADA CONTENEDOR ME FIJO SI TIENE OFERTA O ENVIO GRATIS Y LO DIBUJO
        dibujarCartelOfertaEnvio(listaCompus[i],caja);
    }
}


const botonAgregar = document.querySelectorAll('.boton');

botonAgregar.forEach((element)=>{
    element.addEventListener('click',()=>{
        agregarAlCarrito(element,listaCompus);
    })
})


