import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutorService } from '../../shared/autor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styles: ``
})
export class AutorCreateComponent {
  autorForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    edituraId: new FormControl('', Validators.required)
  });

  constructor(
    private fb: FormBuilder, 
    private autorService: AutorService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.autorForm.valid) {
      this.autorService.createAutor(this.autorForm.value).subscribe( () => {
        this.autorService.refreshList();
        // this.router.navigate(['/autor']);
      }

      );
    }
  }
}
