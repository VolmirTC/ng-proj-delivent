import { UrlService } from './../url.service';
import { Resultado } from './../model/resultado';
import { Injectable } from '@angular/core';

import {  HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  // resultado: Resultado[] = [];
  novo: Observable<Resultado[]>;
  URL_API: string = UrlService.API_RESULTADO;
  constructor(private client: HttpClient) {}

  getAllResultados(): Observable<Resultado[]> {

    console.warn('Service Api ====>' + this.URL_API);

    this.novo = this.client.get<Resultado[]>(UrlService.API_RESULTADO);

    return this.novo;
  }


  // MOCK
  // listar() {

  //   this.resultado = [{
  //     "Id": 1,
  //     "Concurso": 5076,
  //     "Numeros": "55,66,57,58,9"
  //   },

  //   {
  //     "Id": 2,
  //     "Concurso": 5077,
  //     "Numeros": "15,26,37,48,19"
  //   }    ];

  //   return this.resultado;
  // }

}
