// function iniMatriz()
// {
// 	window.dhx_globalImgPath="cb/imgs/";

// 	frmMatriz = tamMatriz('frmMatriz');
// }



function cambiar(id){
	document.getElementById(id).style.background = "white";
}

function matriz(value){
	document.write('<div class="grid-container">');
	for(i=0; i<value; i++){
		document.write('<div class="grid-item" id="'+i+'" onclick="cambiar(this.id)"></div>');
	}
	document.write('</div>');

}