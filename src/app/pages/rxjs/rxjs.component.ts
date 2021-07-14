import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

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
    let reloj = ['tic', 'tac']
    const obs$ = new Observable(observer => {
      let i = 0;
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
          i = 0;
          observer.error('i llegó al valor 2');
        }
      }, 1000)
    });

    obs$.pipe(
      retry(2)
    ).subscribe(
      valor => console.log(`Subs: ${valor}`),
      err => console.error(`Error: ${err}`),
      () => console.warn('obs$ terminado')
    );
  }

}
