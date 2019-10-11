import { Component, OnInit } from '@angular/core';
import { Resultado } from '../model/resultado';
import { ResultadosService } from './resultados.service';
import { Observable } from 'rxjs';
import { UrlService } from '../url.service';

@Component({
  selector: 'tag-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultado: Resultado[];
  erro: string = "";
  public sURL: string;

  //novo$: Observable<Resultado[]>; // $ notação holandesa 
  
  constructor(private resultadosService: ResultadosService) { }

  ngOnInit() {
    this.getAllResultados(); 
    this.sURL = UrlService.API_RESULTADO; // this.resultadosService.getUrl();
  }


  public getAllResultados() {

    // $ notação finlandesa
    // this.novo$ = this.resultadosService.getAllResultados();

      this.resultadosService.getAllResultados().subscribe(
        res => {
          this.resultado = res;
          //this.erro = "*** TUDO OK! ***" ;
        },
        err => {
          // alert("Um erro ocorreu com resultado!!!\n" + this.resultadosService.getUrl() );
          this.erro = "Um erro ocorreu com o RESULTADO! " + err;
          console.warn(this.erro);
          //window.alert('Erro: '+this.erro);
        }
      );
    
  }

}
