import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { TodoItem } from '../../models/todo-item.model';
import { TODOS_URL } from '../../constants/urls';

@Injectable({ providedIn: "root" })
export class TodoAPIService {
  public constructor( private http: HttpClient ) {}

  public getTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(TODOS_URL);
  }

  public addTodoItem(todoItem: TodoItem): Observable<TodoItem>  {
    return this.http.post<TodoItem>(TODOS_URL, todoItem);
  }

  public updateTodoItem(todoItem: TodoItem): Observable<TodoItem>  {
    return this.http.put<TodoItem>(`${TODOS_URL}/${todoItem.id}`, todoItem);
  }

  public removTodoItem(id: string): Observable<void>  {
    return this.http.delete<void>(`${TODOS_URL}/${id}`);
  }
}
