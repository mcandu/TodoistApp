import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService, Todo } from '../data.service';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { Observable, Subject, merge, of } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public datas: Observable<Array<Todo>>;
  public description: string;
  public date: Date;
  @ViewChild('myForm') myForm: NgForm;

  private refresh = new Subject();

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.datas = merge(this.refresh, of({})).pipe(
      switchMap(e => this._dataService.getTodos()),
      map( value => {
        return value.data;
      })  
    )
  }

  pushData(){
    this._dataService.addTodo({ checked:false, date: this.date.getTime(), description: this.description }).toPromise().then(()=>{
      this.refresh.next();
      this.myForm.resetForm();
      this.myForm.control.markAsUntouched();
    })

   // this.datas.push({description: this.description, date: this.date});
    //this.myForm.controls.description.markAsUntouched();
  }

  drop(event: CdkDragDrop<string[]>) {
    //moveItemInArray(this.datas, event.previousIndex, event.currentIndex);
  }

}
