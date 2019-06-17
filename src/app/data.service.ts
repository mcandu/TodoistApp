import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDAxMTYxMTdhOTUwMTBjN2EyNDIyMzgiLCJpZGVudGlmaWVyIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYSQxMCR3aWJ2c05zT3hFVkRqNVBsMkVKbm1lLnJoRVY1dlJJaE9FeGhYdk5DckNYSWRSenI2RjVURyIsInBvbGljaWVzIjpbIlBhc3Nwb3J0RnVsbEFjY2VzcyIsIklkZW50aXR5RnVsbEFjY2VzcyIsIlN0b3JhZ2VGdWxsQWNjZXNzIiwiUG9saWN5RnVsbEFjY2VzcyIsIkZ1bmN0aW9uRnVsbEFjY2VzcyIsIlN1YnNjcmlwdGlvbkZ1bGxBY2Nlc3MiLCJCdWNrZXRGdWxsQWNjZXNzIl0sInN0YXRlbWVudHMiOlt7ImVmZmVjdCI6ImFsbG93IiwiYWN0aW9uIjoicGFzc3BvcnQ6aWRlbnRpdHk6KiIsInJlc291cmNlIjoiKiIsInNlcnZpY2UiOiJwYXNzcG9ydDppZGVudGl0eSJ9LHsiZWZmZWN0IjoiYWxsb3ciLCJhY3Rpb24iOiJwYXNzcG9ydDpwb2xpY3k6KiIsInJlc291cmNlIjoiKiIsInNlcnZpY2UiOiJwYXNzcG9ydDpwb2xpY3kifSx7ImVmZmVjdCI6ImFsbG93IiwiYWN0aW9uIjoicGFzc3BvcnQ6aWRlbnRpdHk6KiIsInJlc291cmNlIjoicGFzc3BvcnQ6aWRlbnRpdHkvKiIsInNlcnZpY2UiOiJwYXNzcG9ydDppZGVudGl0eSJ9LHsiZWZmZWN0IjoiYWxsb3ciLCJhY3Rpb24iOiJzdG9yYWdlOioiLCJyZXNvdXJjZSI6InN0b3JhZ2UvKiIsInNlcnZpY2UiOiJzdG9yYWdlIn0seyJlZmZlY3QiOiJhbGxvdyIsImFjdGlvbiI6InBhc3Nwb3J0OnBvbGljeToqIiwicmVzb3VyY2UiOiIqIiwic2VydmljZSI6InBhc3Nwb3J0OnBvbGljeSJ9LHsiZWZmZWN0IjoiYWxsb3ciLCJhY3Rpb24iOiJmdW5jdGlvbjoqIiwicmVzb3VyY2UiOiJmdW5jdGlvbi8qIiwic2VydmljZSI6ImZ1bmN0aW9uIn0seyJlZmZlY3QiOiJhbGxvdyIsImFjdGlvbiI6InN1YnNjcmlwdGlvbjoqIiwicmVzb3VyY2UiOiJzdWJzY3JpcHRpb24vKiIsInNlcnZpY2UiOiJzdWJzY3JpcHRpb24ifSx7ImVmZmVjdCI6ImFsbG93IiwiYWN0aW9uIjoiYnVja2V0OioiLCJyZXNvdXJjZSI6ImJ1Y2tldC8qIiwic2VydmljZSI6ImJ1Y2tldCJ9LHsiZWZmZWN0IjoiYWxsb3ciLCJhY3Rpb24iOiJidWNrZXQ6ZGF0YToqIiwicmVzb3VyY2UiOiJidWNrZXQ6ZGF0YS8qIiwic2VydmljZSI6ImJ1Y2tldDpkYXRhIn1dLCJpYXQiOjE1NjAzNTI1NzQsImV4cCI6MTU2MDUyNTM3NCwiYXVkIjoic3BpY2EuaW8iLCJpc3MiOiJodHRwczovLzM1LjIzOS4yNDcuMTU4L2FwaSJ9.YzAeuvNqZy5XK7jEgrzjA1xlwPHhHTWzEZU0-ILj130"
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<TodoResponse>('https://35.239.247.158/api/bucket/5d03556636fbf385b1fb0996/data');
  }
  
  addTodo(todo: Todo) {
    return this.http.post('https://35.239.247.158/api/bucket/5d03556636fbf385b1fb0996/data',todo,{
      headers: {
        Authorization: this.token
      }
    })
  }
  
}

interface TodoResponse {
  meta: {
    total:number
  };
  data: Array<Todo>;
}

export interface Todo {
  _id?: string;
  description: string;
  date: Number;
  checked: boolean;
}