import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { BuscadorComponent } from './buscador/buscador.component';
import {DataTableModule} from "angular-6-datatable";
import { CapitalizeFirstPipe} from "./capitalizefirst.pipe";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReproductorComponent } from './reproductor/reproductor.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    PrincipalComponent,
    BuscadorComponent,
    CapitalizeFirstPipe,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
