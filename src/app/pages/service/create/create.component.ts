import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacilityService } from 'src/app/services/facility.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string = "";
  submitted = false;

  constructor(private formBuilder: FormBuilder, private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required],
        basePrice: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      this.facilityService.create(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) =>{
          console.log(err);
        }
      })
    }
  }

}
