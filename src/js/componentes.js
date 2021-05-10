import { ToDo } from "../classes";
import { toDoList } from '../index';

//Referencias en el HTML
const divToDoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearToDoHTML = (toDo) => {

    const htmlToDo = 
    `
    <li class="${(toDo.completado) ? 'completed' : ''}" data-id="${toDo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(toDo.completado) ? 'checked' : ''}>
			<label>${toDo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlToDo;

    divToDoList.append(div.firstElementChild);

    return div;

}

// Eventos
txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {

        console.log(txtInput.value);
        const nuevoToDo = new ToDo(txtInput.value);

        toDoList.nuevoToDo(nuevoToDo);
        console.log(toDoList);

        crearToDoHTML(nuevoToDo);
        txtInput.value = '';

    }

})

divToDoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName;
    const toDoElemento   = event.target.parentElement.parentElement;
    const toDoID         = toDoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) {

        toDoList.marcarCompletado(toDoID);
        toDoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')) {

        toDoList.eliminarToDo(toDoID);
        divToDoList.removeChild(toDoElemento);

    }

    console.log(toDoList);

})

btnBorrar.addEventListener('click', () => {

    toDoList.eliminarCompletados();

    for (let i = divToDoList.children.length - 1; i >= 0; i--) {

        const elemento = divToDoList.children[i];

        if (elemento.classList.contains('completed')) {

            divToDoList.removeChild(elemento);

        }

    }

})

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    
    if (!filtro) {return}

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const elemento of divToDoList.children) {

        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        
        }
    }
})