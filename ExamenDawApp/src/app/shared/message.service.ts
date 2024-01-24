import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url:string = environment.apiBaseUrl + '/message';
  list: Message[] = [];

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
    .subscribe({
      next: (data: any) => {
        this.list = data as Message[];
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getMessageDetails(id: string) {
    return this.http.get<Message>(`${this.url}/${id}`);
  }

  createMessage(message: Message) {
    return this.http.post(this.url, message);
  }

  deleteMessage(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
