var init = (function() {
	var padre = document.getElementById("padre");
	var x = 100;
	var y = 100;
	var nuevoDiv, nuevoSpan;


// Creación de cajas dinamicamente
  for (var i = 0; i < x; i++) {
		nuevoDiv = document.createElement("div");
		nuevoDiv.setAttribute("class", "hijo");
		for(var ii = 0; ii < y; ii++) {
			nuevoSpan = document.createElement("span");
			nuevoDiv.appendChild(nuevoSpan);
		}
		padre.appendChild(nuevoDiv);
	}

// Colorines too wuapos
var objetos = document.querySelectorAll(".hijo span");
setInterval(
	()=> {
		for(var i = 0; i < objetos.length; i++) {
			var rand1 = Math.floor(Math.random() * (256));
			var rand2 = Math.floor(Math.random() * (256));
			var rand3 = Math.floor(Math.random() * (256));
			objetos[i].style.backgroundColor = "rgba("+rand1+", "+rand2+", "+rand3+", "+1+")";
		}
	}, 200
);


})();
window.addEventListener("load", init, false);