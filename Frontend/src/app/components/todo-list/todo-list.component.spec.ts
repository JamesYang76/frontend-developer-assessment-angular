import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TodoListComponent } from './todo-list.component';
import { TodoItem } from '../../models/todo-item.model';

describe('TodoListComponent', () => {
  let fixture: ComponentFixture<TodoListComponent>;
  let component: TodoListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent]
    });

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the TodoListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the todoItems count', () => {
    component.todoItems = [new TodoItem('Abc', false, "123"), new TodoItem('Bcd', false, "223"), new TodoItem('Cde', false, "321")];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Showing 3 Item(s)');
  });

  it('should display the Refresh button', () => {
    fixture.detectChanges();
    const buttonElem = fixture.debugElement.query(By.css('.btn-primary'));
    expect(buttonElem.nativeElement.textContent).toContain('Refresh');
  });

  it('should display the todoItems list', () => {
    component.todoItems = [new TodoItem('Abc', true, "123"), new TodoItem('Bcd', false, "223")];
    fixture.detectChanges();
    
    const mButtons = fixture.debugElement.queryAll(By.css('.actions .btn-warning'));
    const mBbuttonTexts = mButtons.map(button => button.nativeElement.textContent.trim());
    expect(mBbuttonTexts).toEqual(['UnMark completed', 'Mark as completed']);

    const rButtons = fixture.debugElement.queryAll(By.css('.actions .btn-danger'));
    const rButtonTexts = rButtons.map(button => button.nativeElement.textContent.trim());
    expect(rButtonTexts).toEqual(['Remove', 'Remove']);
  });

  it('should make getTodoItems emitted', () => {
    spyOn(component.getTodoItems, 'emit');
   
    const button = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    button.click();
    expect(component.getTodoItems.emit).toHaveBeenCalled();
  });

  it('should make toggleTodoItem emitted', () => {
    spyOn(component.toggleTodoItem, 'emit');
    
    component.todoItems = [new TodoItem('Abc', false, "123")];
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('.actions .btn-warning');
    button.click();
    expect(component.toggleTodoItem.emit).toHaveBeenCalled();
  });

  it('should make removeTodoItem emitted', () => {
    spyOn(component.removeTodoItem, 'emit');
    
    component.todoItems = [new TodoItem('Abc', false, "123")];
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('.actions .btn-danger');
    button.click();
    expect(component.removeTodoItem.emit).toHaveBeenCalled();
  });
});