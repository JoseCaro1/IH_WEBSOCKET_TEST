import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesReceiveComponent } from './components/messages-receive/messages-receive.component';
import { MessagesSendComponent } from './components/messages-send/messages-send.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesReceiveComponent,
    MessagesSendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
