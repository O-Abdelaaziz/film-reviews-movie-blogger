import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Movie} from "../../models/movie";
import {MovieType} from "../../shared/enums/movie-type";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private _moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.onGetPopularMovies();
  }

  onGetPopularMovies() {
    this._moviesService.getMovies(MovieType.POPULAR, 20).subscribe(
      (response) => {
        this.movies = response;
      }
    )
  }
}
