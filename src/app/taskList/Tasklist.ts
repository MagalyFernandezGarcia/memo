import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ToDo } from '../to-do-list';
import { ToDoList } from '../to-do-list';
import { CommonModule } from '@angular/common';
import { I } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-taskList',
  templateUrl: './taskList.html',
  styleUrls: ['./taskList.css'],
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule, CommonModule],
})
export class TaskList {
  @Input() toDoList: ToDo[] = [];
  @Output() openAddForm = new EventEmitter<void>();

  handleClick() {
    this.openAddForm.emit();
  }
}
