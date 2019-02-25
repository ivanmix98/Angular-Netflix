import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService }  from '../movie.service';
import {trigger, style, transition, animate, state} from '@angular/animations';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ]),
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge', style({
        transform: 'scale(1.1)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('spin => move', animate('2000ms ease')),
      transition('* => *', animate('500ms ease')),
    ])
  ]
})
export class MovieDetailComponent implements OnInit {

  position: string;
  changePosition(newPosition: string) {
    this.position = newPosition;
  }

  @Input() movie: Movie;
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

}
