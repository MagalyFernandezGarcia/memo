import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './toDo/ToDo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('memo');
}
