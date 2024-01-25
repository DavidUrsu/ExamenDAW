import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Autor } from './autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  url:string = environment.apiBaseUrl + '/Autor';
  list: Autor[] = [];

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
    .subscribe({
      next: (data: any) => {
        this.list = data as Autor[];
        console.log(this.list);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  createAutor(autor: Autor) {
    console.log(autor);
    return this.http.post(this.url, autor);
  }
}
