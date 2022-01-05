import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {LogEngineService} from "../../shared/services/logs/log-engine.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  movies: any = [];

  constructor(
    private _moviesService: MoviesService,
    private _logEngineService: LogEngineService) {
  }

  ngOnInit(): void {
    this.onGetMoviesList();
  }

  onGetMoviesList() {
    this._moviesService.getMovies().subscribe(
      (response: any) => {
        this.movies = response.results;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        this._logEngineService.info(JSON.stringify(this.movies), this.constructor.name, this.onGetMoviesList.name);
      }
    )
  }
}
