import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages-send',
  templateUrl: './messages-send.component.html',
  styleUrls: ['./messages-send.component.css']
})
export class MessagesSendComponent implements OnInit {
  @Output()
  sendEvent:EventEmitter<string> = new EventEmitter()
  registerForm:FormGroup;
  messageController:FormControl;

  constructor() { 
    this.messageController= new FormControl('',[Validators.required]);
    this.registerForm = new FormGroup({
      message:this.messageController
    });
  }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.sendEvent.emit(this.messageController.value)
    console.log(this.registerForm.value)
  }

}
