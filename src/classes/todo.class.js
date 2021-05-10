export class ToDo {

    static fromJson({id, tarea, completado, fecha}) {

        const tempToDo = new ToDo(tarea);

        tempToDo.id         = id;
        tempToDo.tarea      = tarea;
        tempToDo.completado = completado;
        tempToDo.fecha      = fecha;

        return tempToDo;

    }

    constructor(tarea) {

        this.tarea      = tarea;
        this.id         = new Date().getTime();
        this.completado = false;
        this.fecha      = new Date();

    }

}