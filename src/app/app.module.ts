import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResultadosComponent } from './resultados/resultados.component';
import { ResultadosService } from './resultados/resultados.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { rotando } from './app-routing';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    rotando,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
