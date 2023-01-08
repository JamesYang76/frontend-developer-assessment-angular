import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { TodoItem } from './models/todo-item.model';
import { TodoStatus } from './models/todo-satatus.model'
import { TodoAPIService } from './shared/api/todo-api.service';
import { getErrorMessage } from './shared/api/api-error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public todoItems: TodoItem[] = [];
  public todoStatus: TodoStatus = { message: '', error: false };

  public constructor(private todoAPIService: TodoAPIService) {}

  public ngOnInit(): void { 
    this.onGetTodoItems(); 
  }

  public onAddTodoItem(description: string): void {
    this.setMessage('Adding...');
    this.todoAPIService.addTodoItem(new TodoItem(description)).subscribe({
      next: (todoItem) => {
        this.setMessage('Added Success!!!');
        this.todoItems.push(todoItem);
        this.todoItems.sort((a, b) => a.description.localeCompare(b.description));
      },
      error: (errorRes: HttpErrorResponse) => { this.setMessage(getErrorMessage(errorRes), true); }
    });
  }
   
  public onGetTodoItems(): void {
    this.setMessage('Loading...');

    this.todoAPIService.getTodoItems().subscribe({
      next: (todoItems) => {
        this.setMessage('Loaded Success!!!');
        this.todoItems = todoItems.sort((a, b) => a.description.localeCompare(b.description));
      },
      error: (errorRes: HttpErrorResponse) => { this.setMessage(getErrorMessage(errorRes), true); }
    });
  }

  public onToggleTodoItem(param: {todoItem: TodoItem, idx: number}): void {
    this.setMessage('Updading...');

    this.todoAPIService.updateTodoItem({ ...param.todoItem, isCompleted: !param.todoItem.isCompleted }).subscribe({
      next: (todoItem) => {
        this.setMessage('Updaded Success!!!');
        this.todoItems[param.idx].isCompleted = todoItem.isCompleted
      },
      error: (errorRes: HttpErrorResponse) => { this.setMessage(getErrorMessage(errorRes), true); }
    });
  }

  public onRemoveTodoItem(param: {todoItem: TodoItem, idx: number}): void {
    this.setMessage('Removing...');
   
    this.todoAPIService.removTodoItem(param.todoItem.id as string).subscribe({
      next: () => {
        this.setMessage('Removed Success!!!');
        this.todoItems.splice(param.idx, 1)
      },
      error: (errorRes: HttpErrorResponse) => { this.setMessage(getErrorMessage(errorRes), true); }
    });
  }

  private setMessage(message: string, error = false): void {
    this.todoStatus.message = message;
    this.todoStatus.error = error;
  }
}
