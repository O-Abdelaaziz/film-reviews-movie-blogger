import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieType} from "../shared/enums/movie-type";
import {MovieDto} from "../models/movie-dto";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private THE_MOVIE_DB_API_KEY = environment.env.API_KEY;
  private THE_MOVIE_DB_BASE_URL = environment.MOVIE_DB_BASE_URL;

  constructor(private _httpClient: HttpClient) {
  }

  getMovies(movieType: MovieType = MovieType.UPCOMING, size: number = 12) {
    return this._httpClient.get<MovieDto>(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieType}?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US`)
      .pipe(switchMap(response => {
        return of(response.results.slice(0, size));
      }));
  }

  searchMovie(page: number) {
    return this._httpClient.get<MovieDto>(`${this.THE_MOVIE_DB_BASE_URL}/movie/popular?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US&page=${page}`)
      .pipe(switchMap(response => {
        return of(response.results);
      }));
  }
}
