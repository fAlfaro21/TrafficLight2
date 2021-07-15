// Level 1)
// Representar un semáforo con 1 luz (círculo negro) y un botón que al hacer click sobre el la luz cambie de color:
// Negro --> Verde --> Ambar --> Rojo --> Verde
// Level 2)
// LO mismo pero con tres luces...
// Estado inicial: Las 3 están en negro
// Estado 1: Verde la primera y el resto negro
// Estado 2: Ambar la segunda y el resto negro
// Estado 3: Rojo la tercera y el resto negro.
//Level 3)
//Otro botón que haga RESET (vuelvan a negro) y una caja de texto que pide el número de luces que quiero
//Los colores deben de generarse aleatoriamente (utilizar el .style en lugar del .class)'

const submitButton = document.getElementById("submitButton");
const numberOfLights = document.getElementById("numberOfLights");
const resetButton = document.getElementById("resetButton");
const lightSwitch = document.getElementById("lightSwitch");
let ligthsToManage = 0;
let ligthColor;
let i1=0;

function getColorRandom(){
  let rColor = Math.floor(Math.random() * 255);  
  let gColor = Math.floor(Math.random() * 255);
  let bColor = Math.floor(Math.random() * 255);
  lightColor = `rgb(${rColor},${gColor},${bColor})`;
  return lightColor;
}

function turnOnLight(ligthsToManage){
  
  //Apaga todas las luces:
  for (let i = 0; i < ligthsToManage; i++) {
    let trafficLightOff = document.getElementById("trafficLight" + i);
    trafficLightOff.setAttribute("style", "background-color: rgb(0,0,0)");
  }

  //Obtiene el color random:
  getColorRandom();
  
  //enciende la luz que toca:    
    let trafficLight = document.getElementById("trafficLight" + i1);
    trafficLight.setAttribute("style", "background-color: " + lightColor);
    i1++;
    if (i1 >= ligthsToManage){
      i1 = 0;
    }
  }

function resetLights(){
  window.location.reload();
}

function createLights(userNumberOfLights){
  for (let i = 0; i < userNumberOfLights; i++) {

    printDiv = document.createElement("div");
    document.body.appendChild(printDiv);

    printId = document.createAttribute("id");
    printId.value = "trafficLight" + i;
    printDiv.setAttributeNode(printId);
    
    printClass = document.createAttribute("class");
    printClass.value = "trafficLight";
    printDiv.setAttributeNode(printClass);
    
    printDiv.setAttribute("style", "background-color: rgb(0,0,0)");
  }
  ligthsToManage = userNumberOfLights;
  return ligthsToManage;
}

submitButton.addEventListener ("click", function(){
  createLights(numberOfLights.value);
});

resetButton.addEventListener ("click", resetLights);

lightSwitch.addEventListener ("click", function(){
  turnOnLight(ligthsToManage);
});