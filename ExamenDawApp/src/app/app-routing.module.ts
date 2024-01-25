import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MessageDetailsComponent } from './message/message-details/message-details.component';
import { MessageCreateComponent } from './message/message-create/message-create.component';
import { MessageDeleteComponent } from './message/message-delete/message-delete.component';
import { CarteListComponent } from './carte/carte-list/carte-list.component';
import { CarteCreateComponent } from './carte/carte-create/carte-create.component';
import { CarteComponent } from './carte/carte.component';
import { EdituraComponent } from './editura/editura.component';
import { EdituraListComponent } from './editura/editura-list/editura-list.component';
import { EdituraCreateComponent } from './editura/editura-create/editura-create.component';
import { AutorComponent } from './autor/autor.component';
import { AutorListComponent } from './autor/autor-list/autor-list.component';
import { AutorCreateComponent } from './autor/autor-create/autor-create.component';
import { CarteAutor } from './shared/carte-autor.model';
import { CarteAutorComponent } from './carte/carte-autor/carte-autor.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'message', component: MessageComponent },
  { path: 'message/create', component: MessageCreateComponent },
  { path: 'message/delete/:id', component: MessageDeleteComponent },
  { path: 'message/:id', component: MessageDetailsComponent },

  { path: 'carte', component: CarteComponent},
  { path: 'carte/list', component: CarteListComponent},
  { path: 'carte/create', component: CarteCreateComponent},
  { path: 'carte/autor', component: CarteAutorComponent},

  { path: 'editura', component: EdituraComponent},
  { path: 'editura/list', component: EdituraListComponent},
  { path: 'editura/create', component: EdituraCreateComponent},

  { path: 'autor', component: AutorComponent},
  { path: 'autor/list', component: AutorListComponent},
  { path: 'autor/create', component: AutorCreateComponent},

  { path: '', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
