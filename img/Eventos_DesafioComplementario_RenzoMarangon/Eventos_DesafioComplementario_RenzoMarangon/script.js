let listaObjetosJSON = JSON.parse(localStorage.getItem("lista"));

let contenedor = document.getElementsByClassName("contenedor")[0];


class objetoVideojuego {
    constructor(nombre,tipo,clase,costo,img,id){
        this.nombre = nombre;
        this.tipo = tipo;
        this.clase = clase;
        this.costo=costo;
        this.img=img
        this.id=id;
    }
   
    
}

const agregarObjeto = () => {
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let clase = document.getElementById("clase").value;
    let costo = parseFloat(document.getElementById("costo").value);
    let img = document.getElementById("img").value.replace(/C:\\fakepath\\/i, '')
    let id = JSON.parse(localStorage.getItem("lista")).length;
    const nuevoObjeto = new objetoVideojuego(nombre,tipo,clase,costo,img,id);

    if(localStorage.getItem("lista") == null){
        lista.push(nuevoObjeto);
        localStorage.setItem("lista",JSON.stringify(lista));
    }else{
        const listaNueva = JSON.parse(localStorage.getItem("lista"));
        listaNueva.push(nuevoObjeto);
        localStorage.setItem("lista",JSON.stringify(listaNueva));
    }
}


const dibujarNuevoObjeto=(objeto)=>{
    let nodo = document.createElement("article");
    nodo.innerHTML = `
        <h2>${objeto.nombre}</h2>
        <p class="equis">X<p>
        <p class="tipo">${objeto.tipo}</p>
        <img src="./img/${objeto.img}"></img>
        <p> 
            <span>Apto para: </span> 
            ${objeto.clase}
        </p>
        <p class="gold">${objeto.costo} golds</p>
        
    `
    contenedor.appendChild(nodo);
}

listaObjetosJSON.forEach(element => {

  dibujarNuevoObjeto(element)

});

const agregar = document.querySelector("#agregar");
const numeros = 123456789;



nombre.onchange=()=>{
    if(nombre.value.length <= 3){
        nombre.classList.add("error");
    }else{
        nombre.classList.remove("error");
    }
}

tipo.onchange=()=>{
    if(tipo.value.length <= 3){
        tipo.classList.add("error");
    }else{
        tipo.classList.remove("error");
    }
}

clase.onchange=()=>{
    if(clase.value.length <= 3){
        clase.classList.add("error");
    }else{
        clase.classList.remove("error");
    }
}


agregar.addEventListener("click",(e)=>{
    if(clase.value.length <= 3 || tipo.value.length <=3 || nombre.value.length <=3 || costo.value.length < 1){

    }else{
        e.preventDefault();
        agregarObjeto();
    }
});


const equis = document.querySelectorAll(".equis");

equis.forEach((elemento)=>{
    
    elemento.addEventListener("click",()=>{
       let article = elemento.parentNode;
       let contenedor = article.parentNode;
       contenedor.removeChild(article);
    

    });
});

//console.log(equis.indexOf())







