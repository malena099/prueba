let coches, marcas;

const url = "https://script.google.com/macros/s/AKfycbzGx73keTTbFXN8KJluAQzvc-Ta453N8U-gfzAGMT9shSrwS3S5izyM9ouJDd5NHyTL/exec";

fetch(url)
    .then(response => response.json())
    .then(data => loadCars(data));

function loadCars(data) {
    coches = []
    
    marcas = new Set()
    
    for (let row in data) {
        coches.push(
            {
                "marca": data[row][0],
                "modelo": data[row][1],
                "fechas": data[row][2],
                "urlImagen": data[row][3]
            }
        )
        
        marcas.add(data[row][0])
    }
    
    console.log(coches);
    console.log(marcas);
    console.log(getModelosForMarca("Tesla"));
    console.log(getFechasForMarcaAndModelo("Toyota", "Prius"));

    loadSelect("marcas", marcas);
}

function getModelosForMarca(marca) {
    
    let models = new Set()
    
    for (let coche of coches) {
        if (coche["marca"] === marca) {
            models.add(coche["modelo"])
        }
    }
    
    return models;
}

function getFechasForMarcaAndModelo(marca, modelo) {
    let fechas = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo) {
            fechas.push(coche["fechas"])
        }
    }
    
    return fechas;
}

function loadSelect(id, values) {
    let selectElement = document.getElementById(id);
    selectElement.innerHTML = ''
    
    for (let value of values) {
        selectElement.add(new Option(value));
    }

}