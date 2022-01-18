//nombre objeto, tipo de objeto, clase, costo

let lista =[
    {
    "id":"0",
    "nombre":"Widowmaker",
    "tipo":"espada",
    "clase":"paladin, gladiador, caballero",
    "costo":"15000",
    "img":"1.png",
    },

    {
    "id":"1",
    "nombre":"Ojo de Murloc",
    "tipo":"componente",
    "clase":"todos",
    "costo":"50",
    "img":"2.png",
    },

    {
    "id":"1",
    "nombre":"Filo de la Cordura",
    "tipo":"hacha",
    "clase":"gladiador, caballero",
    "costo":"5000",
    "img":"3.png",
    },

    {
    "id":"1",
    "nombre":"Tentáculos de Cthulhu",
    "tipo":"baston",
    "clase":"mago, brujo, sacerdote",
    "costo":"18000",
    "img":"4.png",
    },

    {
    "id":"1",
    "nombre":"Cuerno de Mamut",
    "tipo":"componente",
    "clase":"todos",
    "costo":"2500",
    "img":"5.png",
    },

    {
    "id":"1",
    "nombre":"Coraza de Huesos",
    "tipo":"pechera",
    "clase":"paladin, caballero",
    "costo":"5000",
    "img":"6.png",
    },

];

localStorage.setItem("lista",JSON.stringify(lista));