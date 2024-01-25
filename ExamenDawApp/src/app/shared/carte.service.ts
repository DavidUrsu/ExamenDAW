import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Carte } from './carte.model';
import { CarteAutor } from './carte-autor.model'

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  url:string = environment.apiBaseUrl + '/Carte';
  list: Carte[] = [];
  listRelatieAutoriCarti: CarteAutor[] = [];

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
    .subscribe({
      next: (data: any) => {
        this.list = data as Carte[];
        console.log(this.list);
      },
      error: (error: any) => {
        console.log(error);
      }
    })

    //iau si relatiile
    this.http.get(environment.apiBaseUrl + '/Carte/Autor')
    .subscribe({
      next: (data: any) => {
        this.listRelatieAutoriCarti = data as CarteAutor[];
        console.log(this.listRelatieAutoriCarti);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  createCarte(carte: Carte) {
    return this.http.post(this.url, carte);
  }

  createCarteAutor(carteAutor: CarteAutor) {
    console.log(carteAutor);
    return this.http.post(environment.apiBaseUrl + '/Carte/Autor', carteAutor);
  }
}
