import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EdituraService } from '../../shared/editura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editura-create',
  templateUrl: './editura-create.component.html',
  styles: ``
})
export class EdituraCreateComponent implements OnInit {
  edituraForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(
    private fb: FormBuilder,
    private edituraService: EdituraService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.edituraForm.valid) {
      this.edituraService.createEditura(this.edituraForm.value).subscribe(() => {
        this.edituraService.refreshList();
        // this.router.navigate(['/editura']);
      }

      );
    }
  }
}
