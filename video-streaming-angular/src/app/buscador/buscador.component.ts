import { Component, ViewChild, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
declare var $;



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  movies: Movie[];
  @ViewChild('dataTable') table;
  dataTable: any;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

  

}
