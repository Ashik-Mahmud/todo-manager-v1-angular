import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  title: string = '';
  description: string = '';
  constructor(private router: Router) {}
  onSubmit() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const newTodo = {
      id: todos.length + 1,
      title: this.title,
      description: this.description,
      completed: false,
    };
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    this.title = '';
    this.description = '';
    this.router.navigate(['/']);
  }
}
