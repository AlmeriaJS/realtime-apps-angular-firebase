import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boards: FirebaseListObservable<any[]>;
  
  constructor(db: AngularFireDatabase) {
    this.boards = db.list('boards');
    
    console.log(this.boards);
  }
  
  addBoard(newBoardName: string) {
    this.boards.push({name: newBoardName});
  }

  removeBoard(boardKey: string) {
    this.boards.remove(boardKey);
  }
}
