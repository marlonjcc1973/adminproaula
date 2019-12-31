import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Para llamar a plugins que estan fuera de Angular o Typescript
declare function initPlugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
    initPlugins();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }
}
