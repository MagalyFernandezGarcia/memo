import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddTaskForm } from './addTaskForm/AddTaskForm';
import { CommonModule } from '@angular/common';
import { TaskList } from './taskList/Tasklist';
import { ToDo, ToDoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTaskForm, CommonModule, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('memo');
  doneList = signal<ToDo[]>([]);

  constructor(private toDoListService: ToDoService) {}

  isAddFormOpen = false;
}
