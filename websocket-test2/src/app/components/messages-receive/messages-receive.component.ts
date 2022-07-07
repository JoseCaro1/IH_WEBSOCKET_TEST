import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-receive',
  templateUrl: './messages-receive.component.html',
  styleUrls: ['./messages-receive.component.css']
})
export class MessagesReceiveComponent implements OnInit {

  
  @Input()
  message:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
