import { Injectable } from '@angular/core';

export interface ToDo {
  id: number;
  title: string;
  done: boolean;
}

const STORAGE_KEY = 'todo-list';
let id = 0;

@Injectable({
  providedIn: 'root',
})
export class ToDoList {
  toDoList: ToDo[] = [];
  constructor() {
    const stored = localStorage.getItem(STORAGE_KEY);
    this.toDoList = stored ? JSON.parse(stored) : [];
  }

  addTask(title: string) {
    const newTask = {
      id: id++,
      title,
      done: false,
    };
    this.toDoList.push(newTask);
    localStorage.setItem('todo-list', JSON.stringify(this.toDoList));
  }
}
