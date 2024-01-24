import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../shared/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styles: ``
})
export class MessageCreateComponent implements OnInit {
  messageForm: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required)
  
  });

  constructor(
    private fb: FormBuilder, 
    private messageService: MessageService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.messageForm.valid) {
      this.messageService.createMessage(this.messageForm.value).subscribe( () => {
        this.messageService.refreshList();
        this.router.navigate(['/message']);
      }

      );
    }
  }
}