/*
function tocaSom(idElementoAudio) {
	document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`; //template string

	tecla.onclick = function () {
		tocaSom(idAudio);
	};
}
*/

const botao = document.querySelectorAll('[data-botao]');
const som = document.querySelectorAll('[data-som]');

botao.forEach((element) => {
	element.addEventListener('click', (event) => {
		tocaSom(event.target.dataset);
	});
});
function tocaSom(botao) {
	if (botao == som.dataset) {
		som.play();
	}
}
