import { Component, OnInit } from '@angular/core';
import { EdituraService } from '../../shared/editura.service';

@Component({
  selector: 'app-editura-list',
  templateUrl: './editura-list.component.html',
  styles: ``
})
export class EdituraListComponent implements OnInit{
  constructor(public service: EdituraService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
