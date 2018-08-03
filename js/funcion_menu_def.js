var menu = document.getElementById('menu1');
var botonM = document.getElementById('mostrar');
var botonO = document.getElementById('ocultar');

botonM.onclick = function(){
	menu.className = 'menuPuesto';
};

botonO.onclick = function(){
	menu.className = 'menuOculto';
};