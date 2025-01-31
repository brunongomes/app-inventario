import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    const loginData = {
      email: this.usuario,
      senha: this.senha
    };

    this.loginService.makeLogin(loginData).subscribe(response => {
      localStorage.setItem('authToken', response.token);
      this.router.navigate(['/items']);
      // localStorage.getItem('authToken'); // capturar token
      // localStorage.removeItem('authToken'); // remover token
    }, error => {
      console.error('Login failed:', error.message);
      alert('Login failed');
    });
  }
}
