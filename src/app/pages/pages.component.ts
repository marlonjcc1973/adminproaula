import { Component, OnInit } from '@angular/core';

// Para llamar a plugins que estan fuera de Angular o Typescript
declare function initPlugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initPlugins();
  }
}
