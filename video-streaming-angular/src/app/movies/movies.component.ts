import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MOVIES } from '../mock-movies';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
 
export class MoviesComponent implements OnInit {
 
  movies: Movie[];
 
  constructor(private movieService: MovieService) { }
 
  ngOnInit() {
    this.getMovies();
  }
 
  

  getMovies(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

  
  favorits(id){

    id= id-1;

      localStorage.setItem("favorito", JSON.stringify(MOVIES[id].name));
      document.getElementById("result").innerHTML = JSON.parse(localStorage.getItem("favorito"));
    
   }

  nofavorits(){
    localStorage.removeItem("favorito");
    document.getElementById("result").innerHTML = localStorage.getItem("favorito");

  }

  items = [];

  store(id) {
    id= id-1;

    
    this.items.push(MOVIES[id].name);
    localStorage.setItem("item", JSON.stringify(this.items));
    document.getElementById("result").innerHTML = JSON.parse(localStorage.getItem("item"));
    
    
}

mostrar(){
  this.items.pop();
  
  document.getElementById("result").innerHTML = this.items.toString();
  
}

}

