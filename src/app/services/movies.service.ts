import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private THE_MOVIE_DB_API_KEY = environment.env.API_KEY;

  constructor(private _httpClient: HttpClient) {
  }

  getMovies() {
    console.log(this.THE_MOVIE_DB_API_KEY);
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US&page=1`);
  }
}
