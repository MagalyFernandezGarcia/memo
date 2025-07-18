import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToDo } from '../to-do-list';
import { ToDoList } from '../to-do-list';

@Component({
  standalone: true,
  selector: 'app-toDo',
  templateUrl: './toDo.html',
  styleUrls: ['./toDo.css'],
  imports: [MatCardModule, MatCheckboxModule],
})
export class ToDoComponent {
  toDoList: ToDo[] = [];

  constructor(private toDoListService: ToDoList) {
    this.toDoList = toDoListService.toDoList;
  }
}
