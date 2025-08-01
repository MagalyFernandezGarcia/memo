import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ToDo, ToDoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskList',
  templateUrl: './taskList.html',
  styleUrls: ['./taskList.css'],
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule, CommonModule],
})
export class TaskList implements OnInit {
  taskList!: ToDo[];

  @Output() openAddForm = new EventEmitter<void>();
  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    this.toDoService.data.subscribe((data) => {
      this.taskList = data;
    });
    this.toDoService.get();
  }

  doneList(): ToDo[] {
    return this.taskList.filter((todo) => todo.done);
  }

  toDoList(): ToDo[] {
    return this.taskList.filter((todo) => !todo.done);
  }

  handleClick() {
    this.openAddForm.emit();
  }

  toggleDone(toDo: ToDo) {
    this.toDoService.toggleDone(toDo.id);
  }
}
