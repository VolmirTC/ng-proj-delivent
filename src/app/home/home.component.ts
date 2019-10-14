import { RetornaVersaoPipe } from './../retorna-versao.pipe';
import { UrlService } from './../url.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = UrlService.title; // 'Delivent';
  site = 'Site:' + UrlService.SITE;
  _RESULTADO = 'API:' + UrlService.API_RESULTADO;
  _VERSAO =  UrlService.VERSAO;

  constructor() { }

  ngOnInit() {
  }

}
