import { TestBed, ComponentFixture } from '@angular/core/testing';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let fixture: ComponentFixture<TodoFormComponent>;
  let component: TodoFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [ReactiveFormsModule ]
    });

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the TodoFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display input element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  });

  it('should create a form with form controls', () => {
    expect(component.todoItemForm instanceof FormGroup).toBe(true);
    expect(component.todoItemForm.get('description') instanceof FormControl).toBe(true);
  });

  it('should display two button elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-primary')?.textContent).toContain('Add Item');
    expect(compiled.querySelector('.btn-secondary')?.textContent).toContain('Clear');
  });

  it('should validate the form as valid when filled out correctly', () => {
    component.todoItemForm.setValue({description: 'abc'});
    expect(component.todoItemForm.valid).toBeTruthy();
  });

  it('should validate the form as invalid when empty', () => {
    expect(component.todoItemForm.valid).toBeFalsy();
  });

  it('should validate the form as invalid when forbiden words', () => {
    ['cat', 'dog', 'yes', 'no'].forEach((forbidenWowrd)=> {
      component.todoItemForm.setValue({description: forbidenWowrd});
      expect(component.todoItemForm.valid).toBeFalsy();
    })
  });

  it('should make addTodoItem emitted', () => {
    spyOn(component.addTodoItem, 'emit');
    component.todoItemForm.setValue({description: 'abc'});
    fixture.detectChanges();
    
    const button = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    button.click();
    expect(component.addTodoItem.emit).toHaveBeenCalled();
  });

  it('should make a form reset', () => {
    component.todoItemForm.setValue({description: 'abc'});
   
    const button = fixture.debugElement.nativeElement.querySelector('.btn-secondary');
    button.click();
    expect(component.todoItemForm.value.description).toBe(null);
  });
});
