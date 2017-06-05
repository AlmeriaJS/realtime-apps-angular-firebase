import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'todos',
  template: `
    <ul>
      <li *ngFor="let todo of todos | async">
        <span>{{todo.text}}</span>
        <button type="button" 
                class="btn btn-link glyphicon glyphicon-ok" 
                (click)="deleteTodo(todo.$key)"></button>
      </li>
    </ul>

    <form class="form-inline">
      <div class="form-group">
        <input type="text" class="form-control" #newTodo /> 
        <button type="button" 
            class="btn btn-default" 
            (click)="addTodo(newTodo.value)">Add</button>
      </div>
    </form> 
  `
})
export class TodosComponent implements OnInit {
  @Input() boardKey: string;

  todos: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.todos = this.db.list(`/boards/${this.boardKey}/todos`);
  }

  deleteTodo(todoKey: string) {
    this.todos.remove(todoKey);
  }

  addTodo(newTodoName: string) {
    this.todos.push({ text: newTodoName });
  }

}
