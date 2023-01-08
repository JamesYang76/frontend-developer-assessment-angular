import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent {
  private forbiddenUserwords = ['cat', 'dog', 'yes', 'no'];
  public todoItemForm: FormGroup =  new FormGroup({
    description: new FormControl('', [Validators.required, this.forbiddenWords.bind(this)])
  });

  @Output() public addTodoItem = new EventEmitter<string>();

  public onSubmit(): void {
    this.addTodoItem.emit(this.todoItemForm.value.description);
  }

  public onClear(): void {
    this.todoItemForm.reset();
  }

  public forbiddenWords(control: FormControl): { [s: string]: boolean } | null {
    for (const searchTerm of this.forbiddenUserwords) {
      const regex = new RegExp('\\b' + searchTerm + '\\b', 'gi');
      if (regex.test(control.value) === true) {
        return { wordIsForbidden: true };
      }
    }

    return null;
  }
}
