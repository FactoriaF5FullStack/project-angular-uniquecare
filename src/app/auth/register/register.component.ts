import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidatorDirective } from 'src/app/util/custom-validators/confirm-password-validator.directive';
import { __values } from 'tslib';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string = "";
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [ConfirmPasswordValidatorDirective.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    const signupData = this.form.value;
    this.submitted = true;

    if (this.form.valid) {
      this.authService.signup(signupData)
        .subscribe({
          next: () => {
            this.router.navigate(['/auth/login'], { queryParams: { signup: 'success' } });
            // this.router.navigateByUrl('/');
          },
          error: ({ error }) => {
            console.log(error.message);
            this.errorMessage = error.message.replace('Error: ', '');
          }
        });
    }
  }

}
