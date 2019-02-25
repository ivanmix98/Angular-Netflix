import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent }      from './movies/movies.component';
import { PrincipalComponent }   from './principal/principal.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { BuscadorComponent }  from './buscador/buscador.component';
import { ReproductorComponent }  from './reproductor/reproductor.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'reproductor/:id', component: ReproductorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

