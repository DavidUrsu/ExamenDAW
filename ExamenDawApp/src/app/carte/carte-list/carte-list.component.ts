import { Component, OnInit } from '@angular/core';
import { CarteService } from '../../shared/carte.service';

@Component({
  selector: 'app-carte-list',
  templateUrl: './carte-list.component.html',
  styles: ``
})
export class CarteListComponent {
  constructor(public service: CarteService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
