import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {

    // Si es una referencia a un observable que se quiere almacenar, 
    // usualmente se le agrega un signo de dolar
    let i = 0;
    let reloj = ['tic', 'tac']
    const obs$ = new Observable(observer => {
      const intervalo = setInterval(() => {
        // if (i % 2 == 0) {
        //   console.log(reloj[0]);
        // } else {
        //   console.log(reloj[1]);
        // }
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llegó al valor 2');
        }
      }, 1000)
    });

    obs$.subscribe(
      valor => console.log(`Subs: ${valor}`),
      err => console.error(`Error: ${err}`),
      () => console.warn('obs$ terminado')
    );
  }

}
