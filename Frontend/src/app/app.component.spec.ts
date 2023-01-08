import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents, MockProvider } from 'ng-mocks';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoStatusComponent } from './components/todo-status/todo-status.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAPIService } from './shared/api/todo-api.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, MockComponents(TodoHeaderComponent, TodoFormComponent, TodoStatusComponent, TodoListComponent) ],
      providers: [MockProvider(TodoAPIService)]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the TodoHeaderComponent', () => {
    const el = fixture.debugElement.query(By.directive(TodoHeaderComponent));
    expect(el.componentInstance).toBeTruthy();
  });

  it('should display the TodoFormComponent', () => {
    const el = fixture.debugElement.query(By.directive(TodoFormComponent));
    expect(el.componentInstance).toBeTruthy();
  });

  it('should display the TodoStatusComponent', () => {
    const el = fixture.debugElement.query(By.directive(TodoStatusComponent));
    expect(el.componentInstance).toBeTruthy();
  });

  it('should display the TodoListComponent', () => {
    const el = fixture.debugElement.query(By.directive(TodoListComponent));
    expect(el.componentInstance).toBeTruthy();
  });
});