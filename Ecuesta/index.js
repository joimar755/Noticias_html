var preguntas = [
  {
    Pregunta: "¿la reforma de la salud es importante para usted?",
    Respuesta: ["Si", "No"],
  },
  {
    Pregunta: "¿la reforma laboral es importante para usted?",
    Respuesta: ["Si", "No"],
  },
  {
    Pregunta: "¿la reforma agragaria es importante para usted?",
    Respuesta: ["Si", "No"],
  },
];
let formulario = document.getElementById("formulario");
let Preguntas = document.getElementById("Preguntas");

/*
preguntas.forEach(p => {
  
  
});
*/
for (let i = 0; i < preguntas.length; i++) {
  let Pdiv = document.createElement("div");
  let pbr = document.createElement("br");
  Pdiv.className = "pregunta";
  Pdiv.innerHTML = preguntas[i].Pregunta;
  Preguntas.appendChild(Pdiv);
  for (let j = 0; j < preguntas[i].Respuesta.length; j++) {
    let RespuestaDiv = document.createElement("div");
    RespuestaDiv.className = "respuesta";
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "pregunta" + i;
    input.value = j;
    RespuestaDiv.appendChild(input);
    RespuestaDiv.appendChild(
      document.createTextNode(preguntas[i].Respuesta[j])
    );
    Pdiv.appendChild(RespuestaDiv);
  }
}

function MostrarRespuestas() {
  let Respuesta = [];
  for (let i = 0; i < preguntas.length; i++) {
    let inputs = document.querySelectorAll('input[name="pregunta' + i + '"]');
    let respuesta = null;
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].checked) {
        respuesta = inputs[j].value;
        break;
      } 
    }
    Respuesta.push(respuesta);
  }
  console.log(Respuesta);
  document.getElementById(
    "alert"
  ).innerHTML = ` <div class="alert alert-primary" role="alert">
  <strong>Gracias por participar en la encuesta</strong>
</div>`;
}
