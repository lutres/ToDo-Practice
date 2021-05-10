import { ToDo } from "./todo.class";

export class ToDoList {

    constructor() {

        // this.lista = [];
        this.cargarLocalStorage();

    }

    nuevoToDo(toDo) {

        this.lista.push(toDo);
        this.guardarLocalStorage();

    }

    eliminarToDo(id) {

        this.lista = this.lista.filter(toDo => toDo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado(id) {

        for (const toDo of this.lista) {

            if(toDo.id == id) {

                toDo.completado = !toDo.completado;
                this.guardarLocalStorage();
                break;

            }

        }

    }

    eliminarCompletados() {

        this.lista = this.lista.filter(toDo => !toDo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('toDo', JSON.stringify(this.lista));

    }

    cargarLocalStorage() {

        // if (localStorage.getItem('toDo')) {

        //     this.lista = JSON.parse(localStorage.getItem('toDo'));

        // } else {

        //     this.lista = [];

        // }

        this.lista = (localStorage.getItem('toDo')) 
                      ? this.lista = JSON.parse(localStorage.getItem('toDo'))
                      : this.lista = [];

        this.lista = this.lista.map(obj => ToDo.fromJson(obj));

    }

}



