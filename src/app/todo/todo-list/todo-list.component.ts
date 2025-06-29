import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../interface/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService:TodoService) {
  }
  todos:Todo[]=[];

    ngOnInit(): void {
      this.todoService.getTodos().subscribe({next: (todos:Todo[])=> {
          this.todos=todos;
        }});
    }


}
