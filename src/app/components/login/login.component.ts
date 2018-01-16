import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  data:object = {};

  constructor(
    private fb: FormBuilder,         // {3}
    private authService: UserService // {4}
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  // onSubmit() {
    // if (this.form.valid) {
      // this.authService.login(this.form.value); // {7}
    // }
  //   this.formSubmitAttempt = true;             // {8}
  // }
login(data){
  this.authService.login(data)
  .subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log("success")
  );
}
}
}
