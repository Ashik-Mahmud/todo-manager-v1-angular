import { Component } from '@angular/core';
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
}
