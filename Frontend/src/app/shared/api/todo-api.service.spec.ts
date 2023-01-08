import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoAPIService } from './todo-api.service';
import { TODOS_URL } from '../../constants/urls';
import { TodoItem } from '../../models/todo-item.model';

describe('TodoAPIService', () => {
  let service: TodoAPIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoAPIService]
    });

    service = TestBed.inject(TodoAPIService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should make a getTodoItems request to the correct URL', () => {
    service.getTodoItems().subscribe();

    const req = httpMock.expectOne(TODOS_URL);
    expect(req.request.method).toBe('GET');
  });

  it('should make a addTodoItem request to the correct URL', () => {
    service.addTodoItem(new TodoItem('Abc', false)).subscribe();

    const req = httpMock.expectOne(TODOS_URL);
    expect(req.request.method).toBe('POST');
  });

  it('should make a addTodoItem request to the correct URL', () => {
    const item = new TodoItem('Abc', false, '123')
    service.updateTodoItem(item).subscribe();

    const req = httpMock.expectOne(`${TODOS_URL}/${item.id}`);
    expect(req.request.method).toBe('PUT');
  });

  it('should make a addTodoItem request to the correct URL', () => {
    const item = new TodoItem('Abc', false, '123')
    service.removTodoItem(item.id as string).subscribe();

    const req = httpMock.expectOne(`${TODOS_URL}/${item.id}`);
    expect(req.request.method).toBe('DELETE');
  });
});