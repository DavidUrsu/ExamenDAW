import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarteService } from '../../shared/carte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte-create',
  templateUrl: './carte-create.component.html',
  styles: ``
})
export class CarteCreateComponent implements OnInit{
  carteForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  constructor(
    private fb: FormBuilder, 
    private carteService: CarteService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.carteForm.valid) {
      this.carteService.createCarte(this.carteForm.value).subscribe( () => {
        this.carteService.refreshList();
        // this.router.navigate(['/carte']);
      }

      );
    }
  }
}
