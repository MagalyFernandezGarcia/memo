import { Injectable } from '@angular/core';

export interface ToDo {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToDoList {
  toDoList: ToDo[] = [
    { id: 1, title: 'test', done: false },
    { id: 2, title: 'test2', done: false },
    { id: 3, title: 'test3', done: false },
    { id: 4, title: 'test4', done: false },
  ];
}
