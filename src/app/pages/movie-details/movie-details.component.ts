import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";
import {environment} from "../../../environments/environment";
import {PosterSize} from "../../shared/enums/poster-size";
import {MovieVideo} from "../../models/movie-video";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie | null = null;
  public movieVideos: MovieVideo[] = [];
  public movieId: number = 0;
  public baseUrlImage = environment.BASE_IMAGES_URL_ORIGINAL;
  public defaultImageSize = PosterSize.W342;

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.onGetMovieDetails();
    this.onGetMovieVideos();
  }

  /**
   * other way to get params using subscribe
   * this._activatedRoute.params.subscribe(({id}=>{
   *   console.log(id)
   * }))
   * **/
  onGetMovieDetails() {
    this.movieId = +this._activatedRoute.snapshot.params['id'];
    this._movieService.getMovieDetails(this.movieId).subscribe(
      (response) => {
        this.movie = response;
        console.log(this.movie)
      }
    )
  }

  onGetMovieVideos() {
    this._movieService.getMovieVideos(this.movieId).subscribe(
      (response) => {
        this.movieVideos = response;
      }
    )
  }

}
