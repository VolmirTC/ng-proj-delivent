import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  static SITE = environment.API;
  // public  BASE_UNICA =  "http://localhost:3000/resultado"; // LOCAL com DB.json
  // static API_RESULTADO = "/api/resultado/cors/"; // funciona em modo DEV - usar ngdev.bat
  static API_RESULTADO = environment.API + '/api/resultado/cors/'; // erro de CORS em PROD. Usar ngss e serv
  // static API_RESULTADO = "/db/db.json" ; // funciona apenas json-server

  static title = 'Delivent';
  static VERSAO = '1.0.301';

  constructor() { }

}
