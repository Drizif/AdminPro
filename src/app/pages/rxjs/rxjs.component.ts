import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  intervalSubs: Subscription;

  constructor() {
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log(`Subs: ${valor}`),
    //   err => console.error(`Error: ${err}`),
    //   () => console.warn('obs$ terminado')
    // );
    this.intervalSubs = this.retornaIntervalo(100).subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(period/*, cant*/): Observable<number> {
    return interval(period).pipe(
      // take(cant),
      map(val => val + 1),
      filter(val => (val % 2 === 0) ? true : false),
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
