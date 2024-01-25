import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarteService } from '../../shared/carte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte-autor',
  templateUrl: './carte-autor.component.html',
  styles: ``
})
export class CarteAutorComponent {
  carteAutorForm: FormGroup = new FormGroup({
    carteId: new FormControl('', Validators.required),
    autorId: new FormControl('', Validators.required)
  });

  constructor(
    private fb: FormBuilder, 
    private carteService: CarteService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.carteAutorForm.valid) {
      this.carteService.createCarteAutor(this.carteAutorForm.value).subscribe( () => {
        this.carteService.refreshList();
        // this.router.navigate(['/carte']);
      }

      );
    }
  }
}
