import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private THE_MOVIE_DB_API_KEY="";

  constructor(private _httpClient: HttpClient) {
  }

  getMovies() {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.THE_MOVIE_DB_API_KEY}&language=en-US&page=1`);
  }
}
