import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {


  constructor(private _toDoservice: ToDoService) { }

  ngOnInit(): void {


  }

  addToList(item: HTMLInputElement) {
    let val = item.value.toUpperCase();

    if (val.length > 0) {

      this._toDoservice.addItemtoDo(val)
    }

    item.value = '';
  }

}
