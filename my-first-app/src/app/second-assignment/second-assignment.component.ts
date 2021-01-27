import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: ['./second-assignment.component.css']
})
export class SecondAssignmentComponent implements OnInit {
  disableButton = true;
  userName='';
  constructor() { }

  ngOnInit(): void {
  }
  
  onUserNameUpdate(event : any){
    if(this.userName.length > 0){
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }

  onButtonClick(){
    this.userName ="";
  }

}
