import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ToDo } from '../to-do-list';
import { ToDoList } from '../to-do-list';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-toDo',
  templateUrl: './toDo.html',
  styleUrls: ['./toDo.css'],
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule, CommonModule],
})
export class ToDoComponent {
  toDoList: ToDo[] = [];

  constructor(private toDoListService: ToDoList) {
    this.toDoList = toDoListService.toDoList;
  }
  @Output() openAddForm = new EventEmitter<void>();

  handleClick() {
    this.openAddForm.emit();
  }
}
