import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MessageDetailsComponent } from './message/message-details/message-details.component';
import { MessageCreateComponent } from './message/message-create/message-create.component';
import { MessageDeleteComponent } from './message/message-delete/message-delete.component';

const routes: Routes = [
  { path: 'message', component: MessageComponent },
  { path: 'message/create', component: MessageCreateComponent },
  { path: 'message/delete/:id', component: MessageDeleteComponent },
  { path: 'message/:id', component: MessageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
