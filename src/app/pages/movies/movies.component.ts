import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Movie} from "../../models/movie";
import {MovieType} from "../../shared/enums/movie-type";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private _movieService: MovieService) {
  }

  ngOnInit(): void {
    this.onGetPopularMovies(1);
  }

  onGetPopularMovies(page: number) {
    this._movieService.searchMovie(page).subscribe(
      (response) => {
        this.movies = response;
      }
    )
  }

  onPaginate($event: any) {
    this.onGetPopularMovies($event.page + 1);
  }
}
