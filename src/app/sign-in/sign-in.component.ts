// sign-in.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onSignIn() {
    this.http
      .post('http://localhost:5000/api/auth/signin', {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          // Redirect to home page or show success message
        },
        error: (error) => {
          this.errorMessage =
            error.error || 'Sign-in failed. Please try again.';
        },
      });
  }
}




