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
  isEdit: string = this.router.url.split('/')[2];

  ngOnInit(): void {
    if (!this.isEdit) return;
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const todo = todos.find((t: any) => t.id === +this.isEdit);
    this.title = todo.title || '';
    this.description = todo.description || '';
  }

  onSubmit() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');

    // get the router params
    const id = this.router.url.split('/')[2];
    if (id) {
      const newTodos = todos.map((t: any) => {
        if (t.id === +id) {
          t.title = this.title;
          t.description = this.description;
        }
        return t;
      });
      localStorage.setItem('todos', JSON.stringify(newTodos));
      this.router.navigate(['/']);
      return;
    }

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

  goBack() {
    this.router.navigate(['/']);
  }
}
