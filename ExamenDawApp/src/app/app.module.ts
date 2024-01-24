import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageCreateComponent } from './message/message-create/message-create.component';
import { MessageDeleteComponent } from './message/message-delete/message-delete.component';
import { MessageEditComponent } from './message/message-edit/message-edit.component';
import { MessageDetailsComponent } from './message/message-details/message-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageCreateComponent,
    MessageDeleteComponent,
    MessageEditComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
