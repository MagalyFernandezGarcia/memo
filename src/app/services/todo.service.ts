import { computed, Injectable, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject, of } from 'rxjs';

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
export class ToDoService {
  private dataSubject = new BehaviorSubject<ToDo[]>([]);
  data = this.dataSubject.asObservable();

  private todoList(): ToDo[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  get() {
    this.dataSubject.next(this.todoList());
  }

  addTask(title: string) {
    const newTask: ToDo = { id: uuidv4(), title, done: false };
    this.save(newTask);
  }

  private save(todo: ToDo) {
    let newTodos: ToDo[] = [];
    const todoToSave = this.todoList()?.find(({ id }) => todo.id === id);

    if (todoToSave) {
      newTodos = (this.todoList() ?? []).map((t) =>
        t.id === todo.id ? todo : t,
      );
    } else {
      console.log(this.todoList());
      newTodos = [...(this.todoList() ?? []), todo];
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
    this.get();
  }

  toggleDone(id: string) {
    const todoToEdit = this.todoList()?.find((todo) => todo.id === id);
    if (todoToEdit) {
      const newTodo = { ...todoToEdit, done: !todoToEdit?.done };
      this.save(newTodo);
    } else {
      throw new Error("Todo doesn't exist");
    }
  }

  // doneList = computed(() => this.allTasks().filter((task) => task.done));
}
