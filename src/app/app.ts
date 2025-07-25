import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddTaskForm } from './addTaskForm/AddTaskForm';
import { CommonModule } from '@angular/common';
import { TaskList } from './taskList/Tasklist';
import { ToDo, ToDoList } from './to-do-list';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTaskForm, CommonModule, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('memo');
  toDoList: ToDo[] = [];
  doneList: ToDo[] = [];

  constructor(private toDoListService: ToDoList) {
    this.toDoList = toDoListService.getToDoList();
    this.doneList = toDoListService.getDoneList();
  }

  isAddFormOpen = false;
}
