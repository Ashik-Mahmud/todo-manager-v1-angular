import { Component, Input } from '@angular/core';
import { TodoInterface } from 'src/interfaces/TodoInterface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: TodoInterface | any;
  constructor() {}
}
