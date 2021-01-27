import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverName='testserver';
  serverCreated = false;
  servers = ['testServer1','testServer2']
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Sever was created. Name is ' +this.serverName;
  }

  onUpdateServerName(event : any){
    this.serverName = event.target.value;
    console.log(this.serverName);
  }

}
