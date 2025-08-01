import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './addTaskForm.html',
  styleUrls: ['./addTaskForm.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class AddTaskForm {
  task = new FormGroup({
    task: new FormControl(''),
  });
  constructor(private toDoListService: ToDoService) {}
  addTask() {
    if (!this.task.value.task) return;
    this.toDoListService.addTask(this.task.value.task);
    this.task.reset({
      task: '',
    });
  }

  @Output() closeAddForm = new EventEmitter<void>();
  handleClick() {
    this.closeAddForm.emit();
  }
}
