import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 100, opacity: 1 }),
            animate('0.1s linear', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)


  })
  loginform: FormGroup = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  })
  signup(){
    if(this.registerForm.valid){
      console.log(JSON.stringify(this.registerForm.value));

    }
    console.log('NOT VSALID')
  }
  login(){
    console.log("test worked")
    if(this.loginform.valid){
      console.log("valid");
      console.log(JSON.stringify(this.loginform.value));

    }
    console.log('NOT VSALID')

  }

}
