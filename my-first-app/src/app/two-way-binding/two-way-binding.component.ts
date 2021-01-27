import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  userName ='';
  displayButton= false;

  constructor() { 

  }

  ngOnInit(): void {
  }

  onUpdateUserName(event : any){
    if(this.userName.length > 0){
      this.displayButton = true;
    } else {
      this.displayButton = false;
    }
  }

}
