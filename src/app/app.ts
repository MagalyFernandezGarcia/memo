import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './toDo/ToDo';
import { AddTaskForm } from './addTaskForm/AddTaskForm';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoComponent, AddTaskForm, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('memo');
  isAddFormOpen = false;
}
