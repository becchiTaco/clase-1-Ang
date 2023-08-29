import { Component } from '@angular/core';    // Importa la clase 'Component' del módulo 'core' de Angular

@Component({                                  // Define el componente con su selector, plantilla y hojas de estilo
  selector: 'app-todo-list',                    // Selector para usar el componente en el HTML
  templateUrl: './todo-list.component.html',    // Ruta a la plantilla HTML del componente
  styleUrls: ['./todo-list.component.css']      // Rutas a los archivos de hojas de estilo
})
export class TodoListComponent {              // Definición de la clase del componente y otorga el acceso a otros archivos con export
  tasks: string[] = [];                         // Matriz para almacenar las tareas
  newTask: string = '';                         // Variable para almacenar la nueva tarea a agregar
  borrar: number | any;                         // Variable para almacenar el valor de la tarea a borrar.

  addTask() {                                 // Método para agregar una nueva tarea a la matriz 'tasks'
    if (this.newTask == '') return;             // Verifica si 'newTask' está vacía, si es así, sale del método
    this.tasks.push(this.newTask);              // Agrega el contenido de 'newTask' a la matriz 'tasks'
    this.newTask = '';                          // Limpia el contenido de 'newTask' para futuras entradas
  }

  removeTask(index: number) {                 // Método para eliminar una tarea de la matriz 'tasks' basado en su índice
    this.tasks.splice(index, 1);                // Utiliza el método 'splice' para eliminar la tarea en el índice especificado
  }
}
