import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-toDo',
  templateUrl: './toDo.html',
  styleUrls: ['./toDo.css'],
  imports: [MatCardModule],
})
export class ToDoComponent {}
