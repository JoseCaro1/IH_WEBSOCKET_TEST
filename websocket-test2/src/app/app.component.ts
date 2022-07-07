import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Librerias a instalar:
   * npm install sockjs-client
   * npm install stomps
   * npm i --save-dev @types/sockjs-client
   * npm i --save-dev @types/stompjs
   * npm i net -S
   */
  title = 'websocket-test';

  greetings: string[] = [];
  stompClient!: Stomp.Client;

  constructor(){}

  ngOnInit() {
    this.connect();
  }

  setConnected(connected: boolean) {
 
    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/testchat');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/start/initial', function(hello){
        console.log(JSON.parse(hello.body));
        _this.showMessage(JSON.parse(hello.body));
      });
   });
  }
  sendMessage(message:string) {
    this.stompClient.send(
      '/current/resume',
      {},
      JSON.stringify(message)
    );
  }

  showMessage(message:string) {
    this.greetings.push(message);
  }
}
