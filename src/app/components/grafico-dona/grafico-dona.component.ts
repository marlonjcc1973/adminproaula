import { Component, Input, OnInit } from '@angular/core';

import { IGrafico } from '../../interfaces/grafico';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() grafico: IGrafico;

  constructor() {
    this.grafico = {
      labels: [],
      data: [],
      type: 'doughnut',
      leyenda: 'Grafico'
    };
  }

  ngOnInit() {}
}
