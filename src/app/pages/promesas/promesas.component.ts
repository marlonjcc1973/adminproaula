import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres()
      .then(mensaje => {
        console.log('Termino!', mensaje);
      })
      .catch(err => {
        console.error('Error en la promesa', err);
      });
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    let contador = 0;

    return new Promise((resolve, reject) => {
      const intervalo = setInterval(() => {
        contador++;
        console.log(contador);

        if (contador === 3) {
          resolve(true);
          // reject('Simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
