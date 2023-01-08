
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {
  @Input() public todoItems: TodoItem[] = [];
  @Output() public getTodoItems = new EventEmitter<void>();
  @Output() public toggleTodoItem = new EventEmitter<{todoItem: TodoItem, idx: number}>();
  @Output() public removeTodoItem = new EventEmitter<{todoItem: TodoItem, idx: number}>();

  public onGetTodoItems(): void {
    this.getTodoItems.emit();
  }

  public onToggleTodoItem(todoItem: TodoItem, idx: number): void {
    this.toggleTodoItem.emit({todoItem: todoItem, idx: idx});
  }

  public onRemoveodoItem(todoItem: TodoItem, idx: number): void {
    this.removeTodoItem.emit({todoItem: todoItem, idx: idx});
  }
}
