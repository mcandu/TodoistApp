import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public datas = [];
  public description = "";
  public date = "";
  @ViewChild('myForm') myForm: NgForm;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    //this.datas = this._dataService.getData();
  }
  
  pushData(){
    this.datas.push({description: this.description, date: this.date});
    this.myForm.resetForm();
    this.myForm.control.markAsUntouched();
    //this.myForm.controls.description.markAsUntouched();
    console.log(this.myForm.controls);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datas, event.previousIndex, event.currentIndex);
  }

}
