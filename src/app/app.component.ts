import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registerationForm';
  registerForm;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.registerForm = FormGroup;
    this.registerForm = this.fb.group({
      name : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

  }

  submit(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
  get name(){
    return this.registerForm.get('name');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

}
