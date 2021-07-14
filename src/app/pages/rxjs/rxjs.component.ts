import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log(`Subs: ${valor}`),
    //   err => console.error(`Error: ${err}`),
    //   () => console.warn('obs$ terminado')
    // );
    this.retornaIntervalo(1000).subscribe(console.log);
  }

  retornaIntervalo(period): Observable<string> {
    return interval(period).pipe(take(4), map(val => `Hola mundo ${val + 1}`));
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
