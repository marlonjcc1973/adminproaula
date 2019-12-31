import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // ViewChilds
  @ViewChild('txtProgress') txtProgress: ElementRef;

  // Inputs
  @Input('nombre') leyenda: string; // Es una mala practia de angular poner un nombre externo al input
  @Input() progreso: number;

  // Outputs
  @Output() cambioValor: EventEmitter<number> = new EventEmitter(); // Tambien se puede cambiar el nombre de la etiqueta como en los inputs

  constructor() {
    this.leyenda = 'Leyenda';
    this.progreso = 0;

    console.log(this.leyenda);
    console.log(this.progreso);
  }

  ngOnInit() {
    console.log(this.leyenda);
    console.log(this.progreso);
  }

  onChange(newValue: number) {
    console.log(newValue);

    console.log(this.txtProgress);

    this.progreso = newValue;

    this.controlarRangoNumero();

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    this.progreso += valor;

    this.controlarRangoNumero();

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

  controlarRangoNumero() {
    if (this.progreso < 0) {
      this.progreso = 0;
    } else if (this.progreso > 100) {
      this.progreso = 100;
    }
  }
}
