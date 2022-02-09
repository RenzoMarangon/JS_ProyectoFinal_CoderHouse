$(()=>{
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



    //SELECCION DE LA IMAGEN DEL ARTICULO QUE VOY A VENDER
    $(".vender_televisor").on("click",function(){
        $(".main-container__seleccionar").slideToggle(500);
        $(".main-container__seleccionar__fondo").slideToggle(500);
        $(".main-container__form").slideToggle(0,()=>{
            $(".main-container__form").css("display","flex");
        });
        sessionStorage.setItem('imgPredeterminada',JSON.stringify('televisor.png'));
    })

    $(".vender_notebook").on("click",function(){
        $(".main-container__seleccionar").slideToggle(500);
        $(".main-container__seleccionar__fondo").slideToggle(500);
        $(".main-container__form").slideToggle(0,()=>{
            $(".main-container__form").css("display","flex");
        });
        
        sessionStorage.setItem('imgPredeterminada',JSON.stringify('notebook.png'));
    })

    $(".vender_celular").on("click",function(){
        $(".main-container__seleccionar").slideToggle(500);
        $(".main-container__seleccionar__fondo").slideToggle(500);
        $(".main-container__form").slideToggle(0,()=>{
            $(".main-container__form").css("display","flex");
        });
        sessionStorage.setItem('imgPredeterminada',JSON.stringify('celular.png'));

    })

    $(".vender_computadora").on("click",function(){
        $(".main-container__seleccionar").slideToggle(500);
        $(".main-container__seleccionar__fondo").slideToggle(500);
        $(".main-container__form").slideToggle(0,()=>{
            $(".main-container__form").css("display","flex");
        });
        sessionStorage.setItem('imgPredeterminada',JSON.stringify('computadora.png'));

    })

    
    
})


//GUARDO TODOS LOS INPUT 
const agregar = document.querySelector('#main-container__form__agregar');
const nombre = document.querySelector('#main-container__form__nombre');
const precio = document.querySelector('#main-container__form__precio');
const descripcion = document.querySelector('#main-container__form__descripcion');
const error = document.querySelector('#main-container__error');
const oferta = document.querySelector('#main-container__form__oferta');
const envio = document.querySelector('#main-container__form__envioGratis');
const precioPrevio = document.querySelector("#main-container__form__precioAnterior");



//CREAR ARTICULO VENDIDO
agregar.addEventListener('click',()=>{
    let nombreArticulo = nombre.value;
    let precioArticulo = precio.value;
    let descripcionArticulo = descripcion.value;
    let ofertaArticulo = oferta.checked;
    let envioArticulo = envio.checked;
    let categoriasArticulo = JSON.parse(sessionStorage.getItem('imgPredeterminada')).replace(".png","");
    let imagenArticulo = JSON.parse(sessionStorage.getItem('imgPredeterminada'));
    let precioAnt = precioPrevio.value;
    if(precioAnt.length<1){
        precioAnt=0;
    }

    if(nombreArticulo.length>4 && precioArticulo.length>1 && descripcionArticulo.length>9){
        //CREO EL OBJETO
        let nuevoObjeto = new Objeto(nombreArticulo,precioArticulo,descripcionArticulo,categoriasArticulo,imagenArticulo,0,ofertaArticulo,envioArticulo,precioAnt);

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
    }
    
    
})

const contenedorVendidos = document.querySelector('#main-container__vendidos');
let listaOb = JSON.parse(localStorage.getItem('vendidos'));


for(let i = 0; i<listaOb.length;i++){
    dibujarArticulo(listaOb[i],contenedorVendidos);
    let caja = document.querySelector('#main-container__vendidos').children[i];
    dibujarCartelOfertaEnvio(listaOb[i],caja);
    
    mostrarQuitarEquis(caja);

    
}
 

eliminarElementosCarritoVenta(listaOb,"vendidos");


const buscarVendidos = document.querySelector('#header-container__li__inputVendidos');
const lupaVendidos = document.querySelector('#header-container__li__buscarArticulosVendidos');

lupaVendidos.addEventListener('click',()=>{
    //FILTRO EL RESULTADO DE LA BUSQUEDA
    buscarElementos(buscarVendidos,listaOb,contenedorVendidos,"#main-container__vendidos");
    eliminarElementosCarritoVenta(listaOb,"vendidos");
    
})

//LO MISMO PERO TOCO ENTER
$(()=>{
    $(document).keypress(function(e){
        if(e.keyCode==13){
            buscarElementos(buscarVendidos,listaOb,contenedorVendidos,"#main-container__vendidos");
            eliminarElementosCarritoVenta(listaOb,"vendidos");

            let articulosEnVenta = document.querySelector('#main-container__vendidos').children;
            for(element of articulosEnVenta){
                mostrarQuitarEquis(element);
            }
        }
    })
})

//CUANDO BORRAN EL CONTENIDO, BORRO LO QUE ESTE EN EL CONTAINER Y DIBUJO TODA LA LISTA DE CELULARES
buscarVendidos.onchange=()=>{
    borrarResultadosBusqueda(contenedorVendidos,listaOb,"#main-container__vendidos");
    eliminarElementosCarritoVenta(listaOb,"vendidos");

    let articulosEnVenta = document.querySelector('#main-container__vendidos').children;
            for(element of articulosEnVenta){
                mostrarQuitarEquis(element);
            }
};


const checkbox = document.querySelector("#main-container__form__oferta");
const labelPrecioAnterior = document.querySelector("#label-anterior");

checkbox.addEventListener("click",()=>{
    if(checkbox.checked){
        $("#label-anterior").slideToggle(500);
        $("#main-container__form__precioAnterior").slideToggle(500);
    }else{
        $("#label-anterior").slideToggle(500);
        $("#main-container__form__precioAnterior").slideToggle(500);
    }
})
