const nombre = document.querySelector('#main-container__form__nombre');
const precio = document.querySelector('#main-container__form__precio');
const descripcion = document.querySelector('#main-container__form__descripcion');
const agregar = document.querySelector('#main-container__form__agregar');
const error = document.querySelector('#main-container__error');
const oferta = document.querySelector('#main-container__form__oferta');
const envio = document.querySelector('#main-container__form__envioGratis');
const categoria = document.querySelector('#main-container__form__categorias')



agregar.addEventListener('click',()=>{
    //oferta.checked;
    //envio.checked;
    let nombreArticulo = nombre.value;
    let precioArticulo = precio.value;
    let descripcionArticulo = descripcion.value;
    let ofertaArticulo = oferta.checked;
    let envioArticulo = envio.checked;
    let categoriasArticulo = categoria.value;
    let imagenArticulo = "";

    if(categoriasArticulo==0){
        categoriasArticulo="celular";
        imagenArticulo="celular.jpg"
    }else if (categoriasArticulo==1){
        categoriasArticulo="televisor";
        imagenArticulo="televisor.png"
    }else if (categoriasArticulo==2){
        categoriasArticulo="computadora";
        imagenArticulo="computadora.jpg"
    }else{
        categoriasArticulo="computadora";
        imagenArticulo="notebook.png"
    }
    let nuevoObjeto = new Objeto(nombreArticulo,precioArticulo,descripcionArticulo,categoriasArticulo,imagenArticulo,0,ofertaArticulo,envioArticulo);
    let arrayObjetos = []


    let listaOb = JSON.parse(localStorage.getItem('vendidos'));

    if(listaOb == null){
        arrayObjetos.push(nuevoObjeto);
        localStorage.setItem('vendidos',JSON.stringify(arrayObjetos))
        
    }else{
        arrayObjetos=arrayObjetos.concat(listaOb);
        arrayObjetos.push(nuevoObjeto);
        localStorage.setItem('vendidos',JSON.stringify(arrayObjetos))
        
    }
    
    
})

const contenedorVendidos = document.querySelector('#main-container__vendidos');
let listaOb = JSON.parse(localStorage.getItem('vendidos'));


for(let i = 0; i<listaOb.length;i++){
    dibujarArticulo(listaOb[i],contenedorVendidos);
    let caja = document.querySelector('#main-container__vendidos').children[i];
    dibujarCartelOfertaEnvio(listaOb[i],caja);
    
}
 



const buscarVendidos = document.querySelector('#header-container__li__inputVendidos');
const lupaVendidos = document.querySelector('#header-container__li__buscarArticulosVendidos');

lupaVendidos.addEventListener('click',()=>{
    let resultadoVendidos = listaOb.filter(element=>element.categoria.toLowerCase().includes(buscarVendidos.value.toLowerCase()) || element.nombre.toLowerCase().includes(buscarVendidos.value.toLowerCase()));
    contenedorVendidos.innerHTML="";
    for(let i = 0; i<resultadoVendidos.length;i++){
        dibujarArticulo(resultadoVendidos[i],contenedorVendidos);
        let caja = document.querySelector('#main-container__vendidos').children[i];
        dibujarCartelOfertaEnvio(resultadoVendidos[i],caja);
    }
});

buscarVendidos.onchange=()=>{
    contenedorVendidos.innerHTML="";
    for(let i = 0; i<listaOb.length;i++){
        dibujarArticulo(listaOb[i],contenedorVendidos);
        let caja = document.querySelector('#main-container__vendidos').children[i];
        dibujarCartelOfertaEnvio(listaOb[i],caja);
    }
}

const equis = document.querySelectorAll('.equis');


equis.forEach((element)=>{
    element.addEventListener('click',()=>{
        eliminarArticulo(element,listaOb,"vendidos");
    })

})

