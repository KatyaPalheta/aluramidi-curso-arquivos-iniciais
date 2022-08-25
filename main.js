let tecla = document.querySelectorAll('[data-botao]');
let som = document.querySelectorAll('[data-som]');

tecla.forEach((element) => {
	element.addEventListener('click', (evento) => {
		tocaSom(evento.target.dataset);
	});
});
