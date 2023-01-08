import { TestBed } from '@angular/core/testing';
import { TodoHeaderComponent } from './todo-header.component';

describe('TodoHeaderComponent', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ TodoHeaderComponent ]
    });
  });

  it('should create the TodoHeaderComponent', () => {
    const fixture = TestBed.createComponent(TodoHeaderComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the image', () => {
    const fixture = TestBed.createComponent(TodoHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const imgElement = compiled.querySelector('.img-fluid');
    expect(imgElement.getAttribute('src')).toEqual('/assets/images/clearpoint-logo.png');
  });

  it('should display the title', () => {
    const fixture = TestBed.createComponent(TodoHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.h4')?.textContent).toContain('Todo List App (Angular)');
  });

  it('should display a list', () => {
    const fixture = TestBed.createComponent(TodoHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ol')).toBeTruthy();
  });
});
