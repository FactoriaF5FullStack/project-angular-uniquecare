import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;
  errorMessage:string = "";
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    const val = this.form.value;
    this.submitted = true;

    if (this.form.valid) {
      this.authService.login(val.username, val.password)
        .subscribe({
          next: () => {
            this.router.navigate(['/'], {queryParams: {loggedIn: 'success'}});
            // this.router.navigateByUrl('/');
          },
          error: ({ error }) => {
            console.log(error.message);
            this.errorMessage = error.message;
          }
        });
    }
  }
}
