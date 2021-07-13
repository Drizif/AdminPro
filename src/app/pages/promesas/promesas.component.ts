import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject) => {
    //   if (false)
    //     resolve('Hola Mundo');
    //   else
    //     reject('error');
    // }).then(msj => {
    //   console.log(`Promesa terminada correctamente: ${msj}`);
    // }).catch(err => {
    //   console.log(`Promesa fallida: ${err}`);
    // });

    // console.log('Fin del Init');
    this.getUsuarios().then(users => {
      console.log(users);
    });
  }

  getUsuarios() {
    return new Promise(res => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => res(body.data));
    });
  }

}
