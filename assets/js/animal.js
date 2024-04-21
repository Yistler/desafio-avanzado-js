export class Animal{
    constructor(nombre, edad, comentarios, img, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._comentarios = comentarios;
        this._img = img;
        this._sonido = sonido;
    }
    get nomber(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get img(){
        return this._img;
    }
    get comentarios(){
        return this._comentarios;
    }
    get sonido(){
        return this._sonido;
    }
}//Fin class animal

export class Leon extends Animal{
    constructor(nomber, edad, img, comentarios, sonido){
        super(nomber, edad, img, comentarios, sonido);
    }
    rugir(){
        console.log("Leon Rugir");
    }
}//Fin class Leon

export class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    aullar(){
        console.log("Lobo Aullar");
    }
}//Fin class Lobo

export class Oso extends Animal{
    constructor(nomber, edad, img, comentarios, sonido){
        super(nomber, edad, img, comentarios, sonido)
    }
    grunir(){
        console.log("Oso Gruñir")
    }
}//Fin class Oso

export class Serpiente extends Animal{
    constructor(nomber, edad, img, comentarios, sonido){
        super(nomber, edad, img, comentarios, sonido)
    }
    sisear(){
        console.log("Serpiente Sisear")
    }
}//Fin class Serpiente

export class Aguila extends Animal{
    constructor(nomber, edad, img, comentarios, sonido){
        super(nomber, edad, img, comentarios, sonido)
    }
    chillar(){
        console.log("Aguila chillar");
    }
}//Fin class Aguila
