import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieType} from "../shared/enums/movie-type";
import {MovieDto} from "../models/movie-dto";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {Movie} from "../models/movie";
import {MovieVideoDto} from "../models/movie-video-dto";
import {MovieImage} from "../models/movie-image";
import {MovieCredit} from "../models/movie-credit";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private THE_MOVIE_DB_API_KEY = environment.env.API_KEY;
  private THE_MOVIE_DB_BASE_URL = environment.MOVIE_DB_BASE_URL;

  constructor(private _httpClient: HttpClient) {
  }

  searchMovie(page: number) {
    return this._httpClient.get<MovieDto>(`${this.THE_MOVIE_DB_BASE_URL}/movie/popular?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US&page=${page}`)
      .pipe(switchMap(response => {
        return of(response.results);
      }));
  }

  getMovies(movieType: MovieType = MovieType.UPCOMING, size: number = 12) {
    return this._httpClient.get<MovieDto>(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieType}?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US`)
      .pipe(switchMap(response => {
        return of(response.results.slice(0, size));
      }));
  }

  getMovieDetails(movieId: number) {
    return this._httpClient.get<Movie>(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieId}?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US`)
  }

  getMovieVideos(movieId: number) {
    return this._httpClient.get<MovieVideoDto>(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieId}/videos?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US`)
      .pipe(switchMap(response => {
        return of(response.results);
      }));
  }

  getMovieImages(movieId: number) {
    return this._httpClient.get<MovieImage>(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieId}/images?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`);
  }

  getMovieCredits(movieId: number) {
    return this._httpClient.get<MovieCredit>(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieId}/credits?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US`);
  }
}
