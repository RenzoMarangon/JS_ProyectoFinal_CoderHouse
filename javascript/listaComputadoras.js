const listaComputadoras=[
    new Objeto('Notebook Asus 22" i5 gtx 1050ti ',100000,'Notebook con 8gb de ram, procesador i5 y placa de video','computadora','notebook.png',0,false,true),
    new Objeto('Notebook BGH 23" i7 8gb 512gb',80000,'Notebook BGH con disco solido','computadora','notebook.png',1,false,true),
    new Objeto('PC i7 32gb 2tb gtx 1650',150000,'PC armada con procesador i7, 32gb de memoria RAM y disco duro','computadora','computadora.png',2,true,false),
    new Objeto('Notebook DELL 8gb 24" ',75000,'Notebook 24" DELL con 8gb de ram y disco solido','computadora','notebook.png',3,false,true),
    new Objeto('Notebook Asus 4gb 20"',50000,'Notebook Asus con 4gb de RAM','computadora','notebook.png',4,true,true),
    new Objeto('PC Ryzen 7 32gb 512 solido" ',80000,'PC armada con ryzen 7, 32gb de RAM y disco solido','computadora','computadora.png',5,false,false),
    ];





sessionStorage.setItem('computadoras',JSON.stringify(listaComputadoras));