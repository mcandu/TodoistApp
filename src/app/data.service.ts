import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(){
    return [
      {"_id":1, "description":"something to do 1","date":"date 1","checked":true},
      {"_id":2, "description":"something to do 2","date":"date 2","checked":false},
      {"_id":3, "description":"something to do 3","date":"date 3","checked":false},
      {"_id":4, "description":"something to do 4","date":"date 4","checked":true}
    ]
  }
}
