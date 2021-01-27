import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {

  displayMessage ="Hello, Happy New Year!";
  displayFlag = false;
  eventLogs=[];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.displayFlag = !this.displayFlag;
    this.eventLogs.push(new Date());
  }

  getBackgroundColor() {
   return 'blue';
  }

}
