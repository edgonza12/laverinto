var meta=false, player=false;

function matriz(value){ //Esta funcion crea las filas y columnas según el valor escogido por el usuario
	document.getElementById('filas').value = value; //guarda el valor de filas en un hidden
	document.getElementById('grid').innerHTML = ''; //declaro el grid en blanco
	r=1;
	for(i=1; i<=value; i++){ // crea las filas
		for (j=1; j<=5; j++) { // crea las columnas
		document.getElementById('grid').innerHTML += '<div class="grid-item" id="'+r+'"">';


		document.getElementById(r).innerHTML = '<button id="'+r+'" onclick="modal(this.id)" class="btn"><i class="fa fa-bars"></i></button>';
		
	
		document.getElementById('grid').innerHTML += '</div>';
		r++;
		}
	}
	$(".btn").hide(); //oculto los botones mediante JQueri
	document.getElementById('category').selectedIndex = -1; // inicializo los select en 0
}

function modal(value){ // esta funcion muestra el conteiner donde se edita el laverinto
	document.getElementById('tipo').selectedIndex = -1;
	$("#myModal").modal();

	document.getElementById('id').value = value;
}

function editar(){ // muestra el escenario de edicion al usuario
	if ($(".btn").css('display') == 'none') { //comprueba que los botones esten ocultos
	$(".btn").show(); //muestra los botones
	var bordes = document.getElementsByClassName("grid-item"); 
	for(i = 0; i < bordes.length; i++){
		bordes[i].style.border = "1px solid rgba(0, 0, 0, 0.8)"; //crea los bordes
	}
	}else {
		$(".btn").hide(); //si esta descubierto oculta el escenario de edicion
		var bordes = document.getElementsByClassName("grid-item");  
		for(i = 0; i < bordes.length; i++){
			bordes[i].style.border = ""; // borra los bordes mediante css
		}
	}

}


function fondo(value){ //esta funcion crea el escenario de edicion mediante el valor del select fondo
	var id = document.getElementById("id").value;
	if(value == 1){
		if(!player){ // en caso del jugador y meta solo debe existir uno por lo que en caso que exista se eliminara
		document.getElementById(id).style.backgroundImage = "url('./img/monigote.jpg')";
		document.getElementById(id).style.backgroundSize = "100px 120px"; 
		idPlayer = id;
		document.getElementById('player').value = id;	
		player = true;
		}else{
			document.getElementById(idPlayer).style.background ="white";
			document.getElementById(id).style.backgroundImage = "url('./img/monigote.jpg')";
			document.getElementById(id).style.backgroundSize = "100px 120px"; 
			idPlayer = id;
			document.getElementById('player').value = id;		
		}
	}else if(value == 2){
		if(!meta){
		document.getElementById(id).style.backgroundImage = "url('./img/meta.jpg')";
		document.getElementById(id).style.backgroundSize = "100px 120px"; 
		idMeta = id;
		document.getElementById('meta').value = id;		
			meta = true;
		}else{
			document.getElementById(idMeta).style.background ="white";
			document.getElementById(id).style.backgroundImage = "url('./img/meta.jpg')";
			document.getElementById(id).style.backgroundSize = "100px 120px"; 
			idMeta = id;
			document.getElementById('meta').value = id;	
		}
	}else if(value == 3){
		document.getElementById(id).style.background ="white";

	}else if(value == 4){
		document.getElementById(id).style.backgroundImage = "url('./img/ladrillo.jpg')";
		document.getElementById(id).style.backgroundSize = "300px 300px"; 	

	}
}

function inicio(){ // funcion de onload, oculto los botonoes por defecto y el select lo inicializo en 0 
	document.getElementById('category').selectedIndex = -1;
	$("#btn2").hide();
	$("#btn3").hide();
}

function botones(){ // oculto o muestro los botones segun sea el caso
	if($("#btn3").css('display') == 'none'){
		$("#btn2").show();
		$("#btn3").show();
	}else{
		$("#btn2").hide();
		$("#btn3").hide();
	}
}

function play(){ //inicia el recorrido del monigote :D
	var a = [], r=1, b=0;
	o = document.getElementById('filas').value; // asigno a o el numero de filas ingresadas por el usuario
	for(i=1; i<=o; i++){ //recorro las filas
		for (j=1; j<=5; j++) { //recorro las columanas
			if($("#"+r).css('background-color') === 'rgb(255, 255, 255)' && $("#"+r).css('background-image') == 'none'){//verifica que celdas estan en blanco (el camino)
				a.push(r); //los ingreso en un arreglo
			}
			r++;
			}
	}
	i = 0;

	loop(i,a);

}
function loop(i,a){

	b = document.getElementById('meta').value;//asigno a b en que celda esta la meta
	if(i <= a.length - 1){
		sleep(1000);
		movimiento(a[i]); //crea el movimiento del monigote
		if(i == a.length - 1){ //verifica que el contador i sea igual al tamaño del arreglo -1 para que el monigote llegue a la meta
			win(b);
		}
		i++;
		loop(i,a);
	}


	// while(i <= a.length - 1) {
	// 	sleep(1000);
	// 	movimiento(a[i]); //crea el movimiento del monigote
	// 	break;
	// 	if(i == a.length - 1){ //verifica que el contador i sea igual al tamaño del arreglo -1 para que el monigote llegue a la meta
	// 		win(b);
	// 	}
	// 	i++;
	// }	
}
function movimiento(a){
	var p;
	p = document.getElementById("player").value;
 		//sleep(1000);

		document.getElementById(a).style.backgroundImage = "url('./img/monigote.jpg')";
		document.getElementById(a).style.backgroundSize = "100px 120px"; 
		document.getElementById(p).style.background ="white";
		console.log(a);
		document.getElementById('player').value = a;

}

function win(b){
	var p;
	p = document.getElementById("player").value;
	sleep(1000);
	document.getElementById(b).style.background ="url('./img/win.jpg')";
	document.getElementById(b).style.backgroundSize = "100px 120px"; 
	document.getElementById(p).style.background ="white";
	// sleep(1000);
	// document.getElementById(b).style.backgroundImage = "url('./img/meta.jpg')";
	// document.getElementById(b).style.backgroundSize = "100px 120px"; 
}

function sleep(milliseconds) { //genera una pausa a la ejecucion del programa
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

