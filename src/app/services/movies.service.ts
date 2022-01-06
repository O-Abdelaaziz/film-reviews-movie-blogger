import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieType} from "../shared/enums/movie-type";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private THE_MOVIE_DB_API_KEY = environment.env.API_KEY;
  private THE_MOVIE_DB_BASE_URL = environment.MOVIE_DB_BASE_URL;

  constructor(private _httpClient: HttpClient) {
  }

  getMovies(movieType: MovieType = MovieType.UPCOMING) {
    console.log(this.THE_MOVIE_DB_API_KEY);
    console.log(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieType}?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US&page=1`)
    return this._httpClient.get(`${this.THE_MOVIE_DB_BASE_URL}/movie/${movieType}?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US&page=1`);
  }
}
