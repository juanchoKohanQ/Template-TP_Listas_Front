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

let comidas = [
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

const container = document.getElementById('comidaContainer');

function mostrarComidasConForEach() {

 container.innerHTML=""  

  comidas.forEach( tarjeta => {
    container.innerHTML +=
`
  <article class="comida1">
        <h2 class="comida">${tarjeta.nombre}</h2>
        <p>${tarjeta.categoria}</p>
        <p>${tarjeta.provincia}</p>
        <span class ="categoria">${tarjeta.categoria}</span>
        <ul>
      
        </ul>
</article>
`
  })
}
mostrarComidasConForEach();

const comidaNueva = document.getElementById("agregarComida");
const boton = document.getElementById("enviarComida");

comidaNueva.addEventListener("submit", (event) => {
  event.preventDefault();
  //alert("Comida nueva recibida" + event.target.nombre.value);
  let nuevaComida = {
   nombre: event.target.nombre.value, 
   categoria: event.target.categoria.value,  
   provincia: event.target.provincia.value,
   //ingredientes: event.target.ingredientes.value,   
  }

  comidas.push(nuevaComida)

  mostrarComidasConForEach()
})

/*let comida = { 
  nombre": "Asado",
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


