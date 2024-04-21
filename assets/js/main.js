import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

//metodo para usado para leer el archivo json
const leerJson = async () => {
    try {
        let response = await fetch('./animales.json')
        let data = [];
        data = await response.json();

        return data;
    } catch (e) {
        console.log('Error al obtener la imagen', e);
    }
};

/** Al haber un cambio se busca la imagen del animal en el archivo json para luego imprimirla en pantalla */
document.getElementById('animal').addEventListener('change', async function () {
    let animal = document.getElementById('animal').value;
    leerJson();
    let data = await leerJson();
    let animalData = data.animales.find((a) => a.name === animal);
    //obtener la url de la imagen de animal
    let imgUrl = animalData.imagen;

    //Mostrar la imagen en el elemento con id 'preview'
    let preview = document.getElementById('preview');
    preview.innerHTML = `<img src="./assets/imgs/${imgUrl}" class="card-img" alt="${animal}" style="height: 200px;"/>`;
})

/** Al dar click agregar al animal y mostrarlo en la tabla de animales en investigación
 * junto con un boton que reprodusca el audio correspondiente al sonido que emite el seleccionado
 */
document.getElementById('btnRegistrar').addEventListener('click', async function () {
    let nombre = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let comentarios = document.getElementById('comentarios').value;
    console.log(comentarios)

    let animal;
    switch (nombre) {
        case 'Leon':
            animal = new Leon(nombre, edad, comentarios);
            break;
        case 'Lobo':
            animal = new Lobo(nombre, edad, comentarios)
            break;
        case 'Oso':
            animal = new Oso(nombre, edad, comentarios);
            break;
        case 'Serpiente':
            animal = new Serpiente(nombre, edad, comentarios);
            break;
        case 'Aguila':
            animal = new Aguila(nombre, edad, comentarios)
            break;
        default:
            console.log('Animal no valido');
    }
    let data = await leerJson(nombre)
    let animalData = data.animales.find((a) => a.name === nombre);
    console.log(animalData)
    let imgUrl = animalData.imagen;
    let audioUrl = animalData.sonido;
    let animalesInvestigacion = document.getElementById('Animales');
    animalesInvestigacion.innerHTML = `<img src="./assets/imgs/${imgUrl}" class="card-img" alt="${animal}" style="height: 150px; width: 200px"/>
    <i class="fa-regular fa-volumen.high"><audio src="./assets/sounds/${audioUrl}" controls></audio></i>
    `

});

const animalesInvestigacion = async (animal) => {
    console.log(animal)
    let img = animal

    
}


/* $(document).ready(function (){
    $('#btnRegistrar').on('click', function () {

    })
}) */