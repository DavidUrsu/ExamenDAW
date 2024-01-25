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
import { CarteComponent } from './carte/carte.component';
import { CarteCreateComponent } from './carte/carte-create/carte-create.component';
import { CarteListComponent } from './carte/carte-list/carte-list.component';
import { AutorComponent } from './autor/autor.component';
import { AutorCreateComponent } from './autor/autor-create/autor-create.component';
import { AutorListComponent } from './autor/autor-list/autor-list.component';
import { EdituraComponent } from './editura/editura.component';
import { EdituraListComponent } from './editura/editura-list/editura-list.component';
import { EdituraCreateComponent } from './editura/editura-create/editura-create.component';
import { CarteAutorComponent } from './carte/carte-autor/carte-autor.component';
import { CarteAutorListComponent } from './carte/carte-autor-list/carte-autor-list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageCreateComponent,
    MessageDeleteComponent,
    MessageEditComponent,
    MessageDetailsComponent,
    CarteComponent,
    CarteCreateComponent,
    CarteListComponent,
    AutorComponent,
    AutorCreateComponent,
    AutorListComponent,
    EdituraComponent,
    EdituraListComponent,
    EdituraCreateComponent,
    CarteAutorComponent,
    CarteAutorListComponent,
    ViewComponent
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
