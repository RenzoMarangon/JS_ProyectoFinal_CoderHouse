const listaTelevisores=[
    new Objeto('Samsung 48" SmartTV + WIFI',50000,'Televisor smart de 48 pulgadas con wifi','televisor','televisor.png',0,false,true,0),
    new Objeto('BGH 60" SmartTV ',80000,'Televisor smart de 60 pulgadas','televisor','televisor.png',1,false,true,0),
    new Objeto('Samsung 35"',10000,'Televisor 35 pulgadas','televisor','televisor.png',2,true,false,12000),
    new Objeto('DELL 50" SmartTV ',35000,'Televisor smart de 50 pulgadas','televisor','televisor.png',3,false,true,0),
    new Objeto('BGH 45" + Netflix',50000,'Televisor smart de 45. Con la compra 1 año de suscripcion a Netflix','televisor','televisor.png',4,true,true,55000),
    new Objeto('Samsung 25" ',50000,'Televisor 25 pulgadas bastante fiero','televisor','televisor.png',5,true,false,60000),
    ];


//const nuevaListaTeles = [listaTelevisores[buscarNumero()], listaTelevisores[buscarNumero()],listaTelevisores[buscarNumero()],]

sessionStorage.setItem('televisores',JSON.stringify(listaTelevisores));

