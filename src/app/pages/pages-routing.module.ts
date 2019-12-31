import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard', description: 'Descripción Dashboard' }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'Progress', description: 'Descripción Progress' }
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
        data: { titulo: 'Graficas', description: 'Descripción Graficas' }
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { titulo: 'Promesas', description: 'Descripción Promesas' }
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: { titulo: 'RxJs', description: 'Descripción RxJs' }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          titulo: 'Ajustes del Tema',
          description: 'Descripción Ajustes del Tema'
        }
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
