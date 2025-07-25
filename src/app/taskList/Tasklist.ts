import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ToDo } from '../to-do-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskList',
  templateUrl: './taskList.html',
  styleUrls: ['./taskList.css'],
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule, CommonModule],
})
export class TaskList {
  @Input() taskList: ToDo[] = [];

  @Output() openAddForm = new EventEmitter<void>();

  handleClick() {
    this.openAddForm.emit();
  }

  toggleDone(toDo: ToDo) {
    toDo.done = !toDo.done;
  }
}
