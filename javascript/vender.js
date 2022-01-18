
//GUARDO TODOS LOS INPUT 
const nombre = document.querySelector('#main-container__form__nombre');
const precio = document.querySelector('#main-container__form__precio');
const descripcion = document.querySelector('#main-container__form__descripcion');
const agregar = document.querySelector('#main-container__form__agregar');
const error = document.querySelector('#main-container__error');
const oferta = document.querySelector('#main-container__form__oferta');
const envio = document.querySelector('#main-container__form__envioGratis');
const categoria = document.querySelector('#main-container__form__categorias')



agregar.addEventListener('click',()=>{
    let nombreArticulo = nombre.value;
    let precioArticulo = precio.value;
    let descripcionArticulo = descripcion.value;
    let ofertaArticulo = oferta.checked;
    let envioArticulo = envio.checked;
    let categoriasArticulo = categoria.value;
    let imagenArticulo = "";

    //DEPENDE LA CATEGORIA, GUARDO UNA IMAGEN GENERICA
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
    //CREO EL OBJETO
    let nuevoObjeto = new Objeto(nombreArticulo,precioArticulo,descripcionArticulo,categoriasArticulo,imagenArticulo,0,ofertaArticulo,envioArticulo);

    //UTILIZO UN ARRAY PARA GUARDAR LOS OBJETOS
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


//VALIDAR INPUTS CON JQUERY

//NOMBRE
$("#main-container__form__nombre").on("change",function(){

    //PREGUNTO SI "nombre" TIENE MENOS DE 5 CARACTERES
    if($("#main-container__form__nombre").val().length<5){
        $("#main-container__form__nombre").addClass("input_faltan_caracteres")
        $("#small_nombre").text("*El nombre debe tener al menos 5 carácteres")
    }else{
        $("#main-container__form__nombre").removeClass("input_faltan_caracteres")
        $("#small_nombre").text("")
    }

    //PREGUNTO SI ALGUN INPUT TIENE MENOS DE 1 CARACTER
    if($("#main-container__form__nombre").val().length<1 || $("#main-container__form__precio").val().length<1 || $("#main-container__form__descripcion").val().length<1){
        $("#small_input_sin_rellenar").text("*Todos los campos son obligatorios")
    }else{
        $("#small_input_sin_rellenar").text("")
    }
})

//PRECIO
$("#main-container__form__precio").on("change",function(){
    //PREGUNTO SI "precio" TIENE MENOS DE 2 DÍGITOS
    if($("#main-container__form__precio").val().length<2){
        $("#main-container__form__precio").addClass("input_faltan_caracteres")
        $("#small_precio").text("*El precio debe tener al menos 2 dígitos")
    }else{
        $("#main-container__form__precio").removeClass("input_faltan_caracteres")
        $("#small_precio").text("")
    }

    //PREGUNTO SI ALGUN INPUT TIENE MENOS DE 1 CARACTER
    if($("#main-container__form__nombre").val().length<1 || $("#main-container__form__precio").val().length<1 || $("#main-container__form__descripcion").val().length<1){
        $("#small_input_sin_rellenar").text("*Todos los campos son obligatorios")
    }else{
        $("#small_input_sin_rellenar").text("")
    }
})


//DESCRIPCION
$("#main-container__form__descripcion").on("change",function(){
    //PREGUNTO SI "descripcion" TIENE MENOS DE 10 CARACTERES
    if($("#main-container__form__descripcion").val().length<10){
        $("#main-container__form__descripcion").addClass("input_faltan_caracteres")
        $("#small_descripcion").text("*La descripción debe tener al menos 10 carácteres")
    }else{
        $("#main-container__form__descripcion").removeClass("input_faltan_caracteres")
        $("#small_descripcion").text("")
    }

    //PREGUNTO SI ALGUN INPUT TIENE MENOS DE 1 CARACTER
    if($("#main-container__form__nombre").val().length<1 || $("#main-container__form__precio").val().length<1 || $("#main-container__form__descripcion").val().length<1){
        $("#small_input_sin_rellenar").text("*Todos los campos son obligatorios")
    }else{
        $("#small_input_sin_rellenar").text("")
    }
})



 
