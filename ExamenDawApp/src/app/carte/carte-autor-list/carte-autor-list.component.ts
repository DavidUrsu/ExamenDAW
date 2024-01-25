import { Component } from '@angular/core';
import { CarteService } from '../../shared/carte.service';

@Component({
  selector: 'app-carte-autor-list',
  templateUrl: './carte-autor-list.component.html',
  styles: ``
})
export class CarteAutorListComponent {
  constructor(public service: CarteService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
