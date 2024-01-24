import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../shared/message.model';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styles: ``
})
export class MessageDetailsComponent implements OnInit{
  message: Message | undefined;

  constructor(
    public service: MessageService,
    private http: HttpClient, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    
    this.service.getMessageDetails(id).subscribe({
      next: (data: Message) => {
        this.message = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
