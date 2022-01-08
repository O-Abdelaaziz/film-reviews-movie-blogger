import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movieId: number = 0;

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.onGetMovieDetails();
  }

  onGetMovieDetails() {
    this.movieId = +this._activatedRoute.snapshot.params['id'];
    console.log(this.movieId)
  }

}
