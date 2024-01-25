import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../shared/autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styles: ``
})
export class AutorListComponent {
  constructor(public service: AutorService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
