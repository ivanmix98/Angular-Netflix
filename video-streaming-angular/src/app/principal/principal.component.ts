import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import {trigger, style, transition, animate, state} from '@angular/animations';
 
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: [ './principal.component.css' ],
  animations: [
    trigger('enterStateP', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateY(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class PrincipalComponent implements OnInit {
  movies: Movie[] = [];
 
  constructor(private movieService: MovieService) { }
 
  ngOnInit() {
    this.getMovies();
  }
 
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies.slice(0, 4));
  }
}