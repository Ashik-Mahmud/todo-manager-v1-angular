import { Component, Input } from '@angular/core';
import { TodoInterface } from 'src/interfaces/TodoInterface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  title: string = 'Todos';
  todos: TodoInterface[];

  constructor() {
    this.todos = [];
    const todosData = JSON.parse(localStorage.getItem('todos') || '[]');
    this.todos = todosData;
  }
  todoDelete(todo: TodoInterface | any) {
    this.todos = this.todos?.filter((t) => t.id !== todo.id);
  }

  todoDone(todo: TodoInterface | any) {
    this.todos = this.todos?.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
  }
}
