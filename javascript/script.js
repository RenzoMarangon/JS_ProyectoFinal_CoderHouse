//GUARDO VARIABLES DE CATEGORIA Y SUB-CATEGORIA
const subCategorias = document.querySelector(".header-container__sub-ul");
const categorias = document.querySelector(".header-container__li__categorias");


//VARIABLE DEL CONTENEDOR DONDE SE VAN A ESCRIBIR LOS ARTICULOS
const containerArticulos = document.querySelector('#main-container__articulos');

//CREO UN ARRAY PARA GUARDAR TODAS LAS LISTAS
let listaArticulosInicio = []

//TRAIGO LAS LISTAS QUE SE GUARDAN EN SESSION STORAGE, EL SET ITEM ESTA EN listaCELU, listaTELE, listaCOMPU
const listaTele = JSON.parse(sessionStorage.getItem('televisores'));
const listaCompu = JSON.parse(sessionStorage.getItem('computadoras'));
const listaCel = JSON.parse(sessionStorage.getItem('celulares'));

//GUARDO LOS 3 PRIMEROS ARTICULOS DE CADA LISTA
//HICE 3 FOR PARA QUE NO SE MEZCLEN LOS ARTICULOS

for(let i = 0; i<3; i++){
    listaArticulosInicio.push(listaTele[i])
}

for(let i = 0; i<3; i++){
    listaArticulosInicio.push(listaCompu[i])
}

for(let i = 0; i<3; i++){
    listaArticulosInicio.push(listaCel[i])
}


//RECORRO LA LISTA DONDE GUARDE LOS 3 PRIMEROS ARTICULOS Y LOS DIBUJO, DESPUES DIBUJO LOS CARTELITOS QUE APARECEN
for(let i = 0; i<listaArticulosInicio.length;i++){
    dibujarArticulo(listaArticulosInicio[i],containerArticulos);
    let caja = document.querySelector("#main-container__articulos").children[i]
    
    dibujarCartelOfertaEnvio(listaArticulosInicio[i],caja)
    
 
}






//TRAIGO LA IMAGEN DE LA LUPA Y EL CONTENIDO DEL INPUT DEL BUSCADOR
const buscador = document.querySelector('#header-container__li__input');
const lupa = document.querySelector('#header-container__li__buscar');

lupa.addEventListener('click',()=>{
    let listaBuscador = [];
    //FILTRO LOS RESULTADOS, SI EL BUSCADOR COINCIDE CON LA CATEGORIA O EL NOMBRE, ME TRAE EL OBJETO
    listaBuscador=listaBuscador.concat(listaCel.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));
    listaBuscador=listaBuscador.concat(listaTele.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));
    listaBuscador=listaBuscador.concat(listaCompu.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));

    containerArticulos.innerHTML='';

    //DIBUJO LA LISTA CON LOS RESULTADOS OBTENIDOS
    for(let i = 0; i<listaBuscador.length;i++){
        dibujarArticulo(listaBuscador[i],containerArticulos);
        let caja = document.querySelector("#main-container__articulos").children[i]
        dibujarCartelOfertaEnvio(listaBuscador[i],caja);
    }

    funcionBotonAgregarAlCarrito(listaArticulosInicio);

})

//LO MISMO PERO TOCO ENTER
$(()=>{
    $(document).keypress(function(e){
        if(e.keyCode==13){
            let listaBuscador = [];
            //FILTRO LOS RESULTADOS, SI EL BUSCADOR COINCIDE CON LA CATEGORIA O EL NOMBRE, ME TRAE EL OBJETO
            listaBuscador=listaBuscador.concat(listaCel.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));
            listaBuscador=listaBuscador.concat(listaTele.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));
            listaBuscador=listaBuscador.concat(listaCompu.filter(element=>element.categoria.toLowerCase().includes(buscador.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscador.value.toLowerCase())));

            containerArticulos.innerHTML='';

            //DIBUJO LA LISTA CON LOS RESULTADOS OBTENIDOS
            for(let i = 0; i<listaBuscador.length;i++){
                dibujarArticulo(listaBuscador[i],containerArticulos);
                let caja = document.querySelector("#main-container__articulos").children[i]
                dibujarCartelOfertaEnvio(listaBuscador[i],caja);
            }

            funcionBotonAgregarAlCarrito(listaArticulosInicio);
        }
    })
})

//CUANDO BORRAN LO QUE ESTA ESCRITO EN EL BUSCADOR, BORRA TODO LO QUE TENGA EL CONTAINER Y VUELVE A DIBUJAR LA PRIMERA LISTA
buscador.onchange=()=>{
    borrarResultadosBusqueda(containerArticulos,listaArticulosInicio,"#main-container__articulos")
    funcionBotonAgregarAlCarrito(listaArticulosInicio);

}


funcionBotonAgregarAlCarrito(listaArticulosInicio);