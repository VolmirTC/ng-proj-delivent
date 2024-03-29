import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { OfflineComponent } from './offline/offline.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AppComponent } from './app.component';

import { ResultadosComponent } from './resultados/resultados.component';
import { HomeComponent } from './home/home.component';


const rotas: Routes = [

  { path: 'resultados', component: ResultadosComponent },
  { path: 'offline', component: OfflineComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }

];

// @NgModule({
//   imports: [RouterModule.forRoot(rotas)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const rotando: ModuleWithProviders = RouterModule.forRoot(rotas);
