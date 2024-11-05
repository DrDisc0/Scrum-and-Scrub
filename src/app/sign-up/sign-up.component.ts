// sign-up.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  fullName: string = '';
  phoneNumber: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onSignUp() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
    };

    this.http.post('http://localhost:5000/api/auth/signup', user).subscribe({
      next: (response) => {
        console.log(response);
        // Optionally, redirect to sign-in page or show a success message
      },
      error: (error) => {
        this.errorMessage = error.error || 'Sign-up failed. Please try again.';
      },
    });
  }
}
