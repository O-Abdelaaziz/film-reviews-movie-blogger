import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Movie} from "../../models/movie";
import {MovieType} from "../../shared/enums/movie-type";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];
  public genreId: number;

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.genreId = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.onGetMovies();
  }

  onGetPopularMovies(page: number) {
    this._movieService.searchMovie(page).subscribe(
      (response) => {
        this.movies = response;
      }
    )
  }

  onGetMovieByGenre(page: number) {
    this.genreId = this._activatedRoute.snapshot.params['id'];
    this._movieService.getMoviesByGenre(this.genreId, page).subscribe(
      (response) => {
        this.movies = response;
      }
    );
  }

  onGetMovies() {
    let hasGenreId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if (hasGenreId) {
      this.onGetMovieByGenre(1);

    } else {
      this.onGetPopularMovies(1);
    }
  }

  onPaginate($event: any) {
    const pageNumber = $event.page + 1;
    if (this.genreId) {
      this.onGetMovieByGenre(pageNumber)
    }
    this.onGetPopularMovies(pageNumber);
  }
}
