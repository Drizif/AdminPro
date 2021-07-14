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
    this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      valor => console.log(`Subs: ${valor}`),
      err => console.error(`Error: ${err}`),
      () => console.warn('obs$ terminado')
    );
  }

  retornaObservable(): Observable<number> {
    // Si es una referencia a un observable que se quiere almacenar, 
    // usualmente se le agrega un signo de dolar
    let i = -1;
    return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
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
  }

}
