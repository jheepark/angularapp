import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    //constructor is a method excuted at the time the component is created by angular
    setTimeout(()=>{
    this.allowNewServer = true;
  }, 2000);
  }

  ngOnInit() {
  }

}
