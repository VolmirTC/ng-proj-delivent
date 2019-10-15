import {Component, OnInit} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UrlService } from './url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // mostrarMenu: boolean = true;
  title = UrlService.title;

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {

       // if (confirm("Nova versão disponivel. Carrega a nova versão?")) {
          window.location.reload();
       // }

      });

    }else{
        console.warn("Erro no swUpdate!"); 
    }

  }
}
