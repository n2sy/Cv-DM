import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //listeSection = ['', 'gl', 'dsend', 'dmwm']
  defaultSection = "dmwm";
  myclass = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f);
  }

  onReset(f) {
    f.reset();
  }

  onRandomPwd(f){
    f.setValue(
      {
        "login": "",
        "Pwd": "azerty123456"
      }
    )
  }

  onRandomPwdPatch(f) {
    f.form.patchValue(
      {
        "Pwd": "azerty123456"
      }
    )
  }

}
