
 
var opciones = ["lecturaUno", "lecturaDos", "lecturaTres","lecturaCuatro", "lecturaCinco"];

function lectura(visualiza , ocultaUno, ocultaDos,ocultaTres,ocultaCuatro){
	document.getElementById(visualiza).style.display = "block";
	document.getElementById(ocultaUno).style.display = "none"
	document.getElementById(ocultaDos).style.display = "none"
	document.getElementById(ocultaTres).style.display = "none"
	document.getElementById(ocultaCuatro).style.display ="none";
}

function MostrarOcultar(id)  
{  

	if(id == opciones[0]){
		lectura(opciones[0],opciones[1],opciones[2],opciones[3],opciones[4]);
	}
	if(id == opciones[1]){
		lectura(opciones[1],opciones[0],opciones[2],opciones[3],opciones[4]);
	}
	if(id == opciones[2]){
		lectura(opciones[2],opciones[0],opciones[1],opciones[3],opciones[4]);
	}
	if(id == opciones[3]){
		lectura(opciones[3],opciones[0],opciones[1],opciones[2],opciones[4]);
	}
	if(id == opciones[4]){
	lectura(opciones[4],opciones[0],opciones[1],opciones[2],opciones[3]);
	}
}  