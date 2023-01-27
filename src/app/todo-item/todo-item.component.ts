import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodoInterface } from 'src/interfaces/TodoInterface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: TodoInterface | any;
  @Output() deleteTodo: EventEmitter<TodoInterface> = new EventEmitter();

  onDeleteTodo(todo: TodoInterface) {
    const isConfirm = confirm('Are you sure?');
    if (!isConfirm) return; // stop the function i
    this.deleteTodo.emit(todo);
    const dbTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    const newTodos = dbTodos.filter((t: TodoInterface) => t.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }
  constructor() {}
}
