import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-message-delete',
  templateUrl: './message-delete.component.html',
  styles: ``
})

export class MessageDeleteComponent implements OnInit {
  constructor(private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.messageService.deleteMessage(id).subscribe();
  }
}