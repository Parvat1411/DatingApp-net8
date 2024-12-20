import { Component, EventEmitter, inject, Input, input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService=inject(AccountService);
cancelRegister = output<boolean>();
  model:any={}

  register(){
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancle();
      },
      error: error=>console.log(error)
      
    })
  }

  cancle(){
    this.cancelRegister.emit(false);
  }
}
