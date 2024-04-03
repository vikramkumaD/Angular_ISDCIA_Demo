
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  registerForm = new FormGroup({
    fullname: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),

  });

  submitted: boolean=false

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  constructor(private formbuilder: FormBuilder,private route : Router)
  {
    
  }

  ngOnInit(): void {


    this.registerForm = this.formbuilder.group(
      {
        fullname: ['', [Validators.required,  Validators.minLength(3),Validators.maxLength(16)]],
        email: ['', [Validators.required, Validators.email, Validators.minLength(6),Validators.maxLength(60)]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]

      }
    )

  }

  onSubmit()
  {

    debugger
    this.submitted = true
    // if (this.registerForm.invalid) {
    //   return;

    // }
    // localStorage.setItem('register',JSON.stringify(this.registerForm))
    // console.log(this.registerForm.value)
    this.route.navigateByUrl('/login')
  }


}
