


function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("git");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("bootstrap");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 

function mover(obj) {
    obj.innerHTML = "Click para enviar"
  }

  function mout(obj) {
    obj.innerHTML = "Enviar Mensaje"
  }

  document.getElementById("enviar").addEventListener("click", function() {
    alert("Gracias por tu visita!");
  });