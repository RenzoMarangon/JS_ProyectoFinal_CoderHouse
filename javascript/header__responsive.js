$(".header-container__hamburguesa").on('click',function(){
    $("main").slideToggle(500);
    $(".header-container__li").slideToggle(500);
    
})

$(".header-container__li__categorias").on('click',function(e){

    $(".header-container__sub-ul").css("height","107px")

})


$(".link-categorias").click(function(e){
    e.preventDefault();
})

const imagenes = document.querySelectorAll(".imagen");

if(document.querySelector('body').clientWidth<900){
    imagenes.forEach((e)=>{
        let imagen = e.src.replace('http://127.0.0.1:5500/img/','');
     
        if(imagen=="celular.png" || imagen=="computadora.png"){
            e.style.width="7rem"
        }
     })
}






