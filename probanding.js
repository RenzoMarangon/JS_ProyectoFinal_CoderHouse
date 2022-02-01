let mas = document.querySelector("#mas");
let menos = document.querySelector("#menos");
let numero = document.querySelector("#numero");
let precio = document.querySelector("#precio");
numero.innerHTML="1";

let costo = 1000;
precio.innerHTML=costo;

mas.addEventListener("click",()=>{
    let sumar = parseInt(numero.textContent);
    sumar+=1;
    numero.innerHTML=sumar

    let total = parseInt(costo.textContent);
    total = costo * sumar;
    precio.innerHTML=total

})

menos.addEventListener("click",()=>{
    if(parseInt(numero.textContent)>1){
        let restar = parseInt(numero.textContent);
        restar-=1;
        numero.innerHTML=restar
        
        let total = parseInt(costo.textContent);
        total = costo * restar;
        precio.innerHTML=total
    }
})




