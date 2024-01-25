import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Editura } from './editura.model';

@Injectable({
  providedIn: 'root'
})
export class EdituraService {
  url:string = environment.apiBaseUrl + '/Editura';
  list: Editura[] = [];

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
    .subscribe({
      next: (data: any) => {
        this.list = data as Editura[];
        console.log(this.list);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  createEditura(editura: Editura) {
    return this.http.post(this.url, editura);
  }
}
