/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comida = [
  {
    "nombre": "Asado",
    "categoria": "Parrilla",
    "provincia": "Buenos Aires",
    "ingredientes": ["Carne vacuna", "Sal", "Chimichurri"]
  },
  {
    "nombre": "Empanadas",
    "categoria": "Horno",
    "provincia": "Tucumán",
    "ingredientes": ["Carne", "Cebolla", "Aceitunas", "Huevo"]
  },
  {
    "nombre": "Locro",
    "categoria": "Guiso",
    "provincia": "Salta",
    "ingredientes": ["Maíz", "Porotos", "Chorizo", "Panceta", "Zapallo"]
  },
  {
    "nombre": "Milanesa",
    "categoria": "Frito",
    "provincia": "Buenos Aires",
    "ingredientes": ["Carne", "Huevo", "Pan rallado", "Aceite"]
  },
  {
    "nombre": "Humita en Chala",
    "categoria": "Horno",
    "provincia": "Jujuy",
    "ingredientes": ["Maíz", "Queso", "Cebolla", "Ají molido"]
  },
  {
    "nombre": "Choripán",
    "categoria": "Parrilla",
    "provincia": "Córdoba",
    "ingredientes": ["Chorizo", "Pan", "Chimichurri"]
  },
  {
    "nombre": "Provoleta",
    "categoria": "Parrilla",
    "provincia": "Buenos Aires",
    "ingredientes": ["Queso provolone", "Orégano", "Aceite de oliva"]
  },
  {
    "nombre": "Milanesas a la napolitana",
    "categoria": "Frito",
    "provincia": "Santa Fe",
    "ingredientes": ["Carne", "Tomate", "Queso", "Jamón", "Orégano"]
  },
  {
    "nombre": "Matambre a la pizza",
    "categoria": "Parrilla",
    "provincia": "Buenos Aires",
    "ingredientes": ["Matambre", "Queso", "Tomate", "Orégano"]
  },
  {
    "nombre": "Torta Frita",
    "categoria": "Frito",
    "provincia": "Entre Ríos",
    "ingredientes": ["Harina", "Agua", "Sal", "Grasa"]
  }
];

for(let i = 0; i <= 9; i++){

if (i === 0){
  const container = document.getElementById('comidaContainer').innerHTML +=
`
  <article class="comida1">
        <h2 class="comida">${comida[0].nombre}</h2>
        <p>${comida[0].categoria}</p>
        <p>${comida[0].provincia}</p>
        <ul> 
        ${comida[0].ingredientes}
        </ul>
</article>
`
console.log(comida1)
}
 if(i === 1){
  const container = document.getElementById('comidaContainer').innerHTML +=

`
  <article class="comida1">
        <h2 class="comida">${comida[1].nombre}</h2>
        <p>${comida[1].categoria}</p>
        <p>${comida[1].provincia}</p>
        <ul> 
        ${comida[1].ingredientes}
        </ul>
</article>
` 
console.log(comida1)
}
else if(i === 2){
  const container = document.getElementById('comidaContainer').innerHTML +=

  `
  <article class="comida2">
        <h2 class="comida">${comida[2].nombre}</h2>
        <p>${comida[2].categoria}</p>
        <p>${comida[2].provincia}</p>
        <ul> 
        ${comida[2].ingredientes}
        </ul>
</article> 
`
console.log(comida1)
}
 if(i === 3){
  const container = document.getElementById('comidaContainer').innerHTML +=

`
  <article class="comida2">
        <h2 class="comida">${comida[3].nombre}</h2>
        <p>${comida[3].categoria}</p>
        <p>${comida[3].provincia}</p>
        <ul> 
        ${comida[3].ingredientes}
        </ul>
</article>
` 
console.log(comida1)
}
 if(i === 4){
  const container = document.getElementById('comidaContainer').innerHTML +=

  `
  <article class="comida2">
        <h2 class="comida">${comida[4].nombre}</h2>
        <p>${comida[4].categoria}</p>
        <p>${comida[4].provincia}</p>
        <ul> 
        ${comida[4].ingredientes}
        </ul>
</article> 
`
console.log(comida1)
}
 if(i === 5){
  const container = document.getElementById('comidaContainer').innerHTML +=

`
  <article class="comida2">
        <h2 class="comida">${comida[5].nombre}</h2>
        <p>${comida[5].categoria}</p>
        <p>${comida[5].provincia}</p>
        <ul> 
        ${comida[5].ingredientes}
        </ul>
</article> 
`
console.log(comida1)
}
 if(i === 6){
  const container = document.getElementById('comidaContainer').innerHTML +=

  `
  <article class="comida2">
        <h2 class="comida">${comida[6].nombre}</h2>
        <p>${comida[6].categoria}</p>
        <p>${comida[6].provincia}</p>
        <ul> 
        ${comida[6].ingredientes}
        </ul>
</article> 
`
console.log(comida1)
}
 if(i === 7){
  const container = document.getElementById('comidaContainer').innerHTML +=

`
  <article class="comida2">
        <h2 class="comida">${comida[7].nombre}</h2>
        <p>${comida[7].categoria}</p>
        <p>${comida[7].provincia}</p>
        <ul> 
        ${comida[7].ingredientes}
        </ul>
</article> 
`
console.log(comida1)
}
 if(i === 8){
  const container = document.getElementById('comidaContainer').innerHTML +=
  `
  <article class="comida2">
        <h2 class="comida">${comida[8].nombre}</h2>
        <p>${comida[8].categoria}</p>
        <p>${comida[8].provincia}</p>
        <ul> 
        ${comida[8].ingredientes}
        </ul>
</article> 
`

console.log(comida1)
}
 if(i === 9){
  const container = document.getElementById('comidaContainer').innerHTML +=
`
  <article class="comida2">
        <h2 class="comida">${comida[9].nombre}</h2>
        <p>${comida[9].categoria}</p>
        <p>${comida[9].provincia}</p>
        <ul> 
        ${comida[9].ingredientes}
        </ul>
</article> 
`
console.log(comida1)
}

}


/*let comida = {
  "nombre": "Asado",
  "categoria": "Parrilla",
  "provincia": "Buenos Aires",
  "ingredientes": ["Carne vacuna", "Sal", "Chimichurri"]
}

document.getElementById("comidaContainer").innerHTML += 
`
<article class="comida1">
        <h2 class="comida">${comida.nombre}</h2>
        <p>${comida.categoria}</p>
        <p>${comida.provincia}</p>
        <ul> 
        ${comida.ingredientes}
        </ul>
</article>*/


