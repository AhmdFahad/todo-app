import { Todo } from './../interface/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl: string = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl + '/todos');
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post(this.baseUrl + '/todos', todo);
  }
}
