import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResultadosComponent } from './resultados/resultados.component';
import { ResultadosService } from './resultados/resultados.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { rotando } from './app-routing';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RetornaVersaoPipe } from './retorna-versao.pipe';
import { OfflineComponent } from './offline/offline.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    RetornaVersaoPipe,
    OfflineComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    rotando,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
