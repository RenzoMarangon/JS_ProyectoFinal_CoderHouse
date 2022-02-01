const listaCelulares=[
    new Objeto('Samsung J7',10000,'Celular Samsung J7 de 16GB','celular','celular.png',0,false,true),
    new Objeto('iPhone 7s',50000,'iPhone 7 de 32GB','celular','celular.png',1,false,true),
    new Objeto('Motorola M7',20000,'Motorola con NFS','celular','celular.png',2,true,false),
    new Objeto('Samsung Galaxy Fortnite',50000,'Celular Samsung galaxy + skin de Fortnite','celular','celular.png',3,false,true),
    new Objeto('iPhone 8',60000,'iPhone 8 super cheto','celular','celular.png',4,true,true),
    new Objeto('Xiaomi s9',20000,'Xiaomi con garantia por 20 años','celular','celular.png',5,false,false),
    ];


    
    
    sessionStorage.setItem('celulares',JSON.stringify(listaCelulares));