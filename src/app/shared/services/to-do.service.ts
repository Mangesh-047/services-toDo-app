import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {


  toDoArray: Array<string> = ['HTML', 'CSS', 'JS']
  constructor(private _snackbat: SnackbarService) { }


  getTodoItem() {
    return this.toDoArray
  }

  addItemtoDo(item: string) {
    this.toDoArray.push(item)

    this._snackbat.openSnackBar(`${item} Added to the ToDo List`)
  }
}
