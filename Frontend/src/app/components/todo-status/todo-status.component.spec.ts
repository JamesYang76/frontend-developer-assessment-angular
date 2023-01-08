import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodoStatusComponent } from './todo-status.component';

describe('TodoStatusComponent', () => {
  let fixture: ComponentFixture<TodoStatusComponent>;
  let component: TodoStatusComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoStatusComponent]
    });

    fixture = TestBed.createComponent(TodoStatusComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the TodoStatus', () => {
    expect(component).toBeTruthy();
  });

  it('should display the status message', () => {
    component.todoStatus = { message: 'Test Message', error: false };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Test Message');
  });

  it('should display the status error message', () => {
    component.todoStatus = { message: 'Error Message', error: true };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.error')?.textContent).toContain('Error Message');
  });
});