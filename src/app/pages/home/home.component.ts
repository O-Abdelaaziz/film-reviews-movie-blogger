import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {LogEngineService} from "../../shared/services/logs/log-engine.service";
import {Movie} from "../../models/movie";
import {MovieType} from "../../shared/enums/movie-type";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public latestMovies: Movie[] = [];
  public upcomingMovies: Movie[] = [];
  public topRatedMovies: Movie[] = [];
  public popularMovies: Movie[] = [];
  public nowPlayingMovies: Movie[] = [];

  constructor(
    private _moviesService: MoviesService,
    private _logEngineService: LogEngineService) {
  }

  ngOnInit(): void {
    this.onGetLatestMovies();
  }

  //region Populate movie list depends on their type
  onGetLatestMovies() {
    this._moviesService.getMovies(MovieType.LATEST).subscribe(
      (response: any) => {
        this.latestMovies = response.results;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        this._logEngineService.info(JSON.stringify(this.latestMovies), this.constructor.name, this.onGetLatestMovies.name);
      }
    )
  }

  onGetUpcomingMovies() {
    this._moviesService.getMovies(MovieType.UPCOMING).subscribe(
      (response: any) => {
        this.upcomingMovies = response.results;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        this._logEngineService.info(JSON.stringify(this.upcomingMovies), this.constructor.name, this.onGetUpcomingMovies.name);
      }
    )
  }

  onGetTopRatedMovies() {
    this._moviesService.getMovies(MovieType.TOP_RATED).subscribe(
      (response: any) => {
        this.topRatedMovies = response.results;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        this._logEngineService.info(JSON.stringify(this.topRatedMovies), this.constructor.name, this.onGetTopRatedMovies.name);
      }
    )
  }

  onGetPopularMovies() {
    this._moviesService.getMovies(MovieType.POPULAR).subscribe(
      (response: any) => {
        this.popularMovies = response.results;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        this._logEngineService.info(JSON.stringify(this.popularMovies), this.constructor.name, this.onGetPopularMovies.name);
      }
    )
  }

  onGetNowPlayingMovies() {
    this._moviesService.getMovies(MovieType.NOW_PLAYING).subscribe(
      (response: any) => {
        this.nowPlayingMovies = response.results;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        this._logEngineService.info(JSON.stringify(this.nowPlayingMovies), this.constructor.name, this.onGetNowPlayingMovies.name);
      }
    )
  }
  //endregion
}
