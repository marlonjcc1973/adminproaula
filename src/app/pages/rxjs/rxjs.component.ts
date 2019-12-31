import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
      // Subscripción al observable
      .subscribe(
        // Subscripcion OK
        console.log,
        // Error en la subscripción
        console.error,
        // Se completa la subscripción
        () => console.log('El observador termino!')
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable<any>((observer: Subscriber<any>) => {
      let contador = 0;

      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        };

        // Para  notificar al codigo al que nos subscribimos
        observer.next(salida);

        if (contador === 10) {
          // Acaba el bucle pero el observador sigue subscrito
          clearInterval(intervalo);
          // Termina la subscripción
          observer.complete();
        }

        // Para devolver el error
        // if (contador === 2) {
        // observer.error('Auxilio!');
        // }
      }, 1000);
    }).pipe(
      // Retry: Sirve para reiniciar la subscrición cuando da un error (Si se pone parametro, es el numero de intentos)
      retry(2),
      // Map: Transforma la información para que regrese lo que necesitamos
      map(resp => resp.valor),
      // Filter: Filtra la información
      filter((valor, index) => (valor % 2 === 1 ? true : false)) // Comprueba si es o no impar
    );
  }
}
