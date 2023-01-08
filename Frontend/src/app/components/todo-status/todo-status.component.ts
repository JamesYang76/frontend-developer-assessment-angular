
import { Component, Input } from '@angular/core';
import { TodoStatus } from '../../models/todo-satatus.model'

@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.scss']
})

export class TodoStatusComponent {
  @Input() public todoStatus: TodoStatus = { error: false, message:'' };
}
