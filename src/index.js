import {ToDo, ToDoList} from './classes';
import { crearToDoHTML } from './js/componentes';


export const toDoList = new ToDoList();

toDoList.lista.forEach(toDo => crearToDoHTML(toDo));