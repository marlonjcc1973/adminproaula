import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Settings } from '../../interfaces/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    tema: 'default',
    temaUrl: 'assets/css/colors/default.css'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarSettings();
  }

  guardarSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  cargarSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }

    this.aplicarTema(this.settings.temaUrl);
  }

  seleccionarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;

    this.aplicarTema(url);

    this.settings.tema = tema;
    this.settings.temaUrl = url;

    this.guardarSettings();
  }

  aplicarTema(url: string) {
    this._document.getElementById('tema').setAttribute('href', url);
  }
}
