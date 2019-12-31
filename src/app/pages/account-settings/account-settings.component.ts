import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['/account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  constructor(public settingService: SettingsService) {}

  ngOnInit() {}

  cambiarColor(link: any) {
    console.log(link);

    const tema: string = link.getAttribute('data-theme');

    this.settingService.seleccionarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }
}
