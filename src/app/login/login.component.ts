import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  //listeSection = ['', 'gl', 'dsend', 'dmwm']
  defaultSection = "dmwm";
  myclass = "";
  erreur = false;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  onSubmit(f) {
    // if(f.value['email'] == "nidhal@gmail.com" && f.value['password'] == "azerty") {
    //   console.log(f.value);

    //   this.router.navigate(['cv']);
    // }
    // else
    //   this.erreur = true;

    this.auth.login(f.value).subscribe(
      (response) => {
        const myToken = response["id"];
        localStorage.setItem('token', myToken)
        this.router.navigate(["cv"]);
      },
      (error) => {
        this.erreur = true;
      }
    );
  }

  onReset(f) {
    f.reset();
  }

  onRandomPwd(f) {
    f.setValue({
      login: "",
      Pwd: "azerty123456",
    });
  }

  onRandomPwdPatch(f) {
    f.form.patchValue({
      Pwd: "azerty123456",
    });
  }
}
