import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface ToDo {
  id: string;
  title: string;
  done: boolean;
}

const STORAGE_KEY = 'todo-list';
let id = 0;

@Injectable({
  providedIn: 'root',
})
export class ToDoList {
  allTasks: ToDo[] = [];
  constructor() {
    const stored = localStorage.getItem(STORAGE_KEY);
    this.allTasks = stored ? JSON.parse(stored) : [];
  }

  getToDoList() {
    return this.allTasks.filter((task) => !task.done);
  }

  getDoneList() {
    return this.allTasks.filter((task) => task.done);
  }

  addTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      done: false,
    };
    this.allTasks.push(newTask);
    this.save();
  }
  toggleDone(id: string) {
    const task = this.allTasks.find((t) => t.id === id);
    if (task) {
      task.done = !task.done;
      this.save();
    }
  }
  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.allTasks));
  }
}
