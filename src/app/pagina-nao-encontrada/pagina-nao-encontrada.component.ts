import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html'
})
export class PaginaNaoEncontradaComponent implements OnInit {

  _VERSAO = UrlService.VERSAO;

  constructor() {}

  ngOnInit() {
  }

}
