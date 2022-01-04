import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  movies: any = [];

  constructor(private _moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.onGetMoviesList();
  }

  onGetMoviesList() {
    this._moviesService.getMovies().subscribe(
      (response: any) => {
        this.movies = response.results;
        console.log(this.movies);
      }
    )
  }
}
