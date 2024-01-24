import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styles: ``
})
export class MessageListComponent implements OnInit{
  constructor(public service: MessageService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
