import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {
  public movieApiKey=environment.env.API_KEY;
  constructor() {
    console.log(this.movieApiKey);
  }

  ngOnInit(): void {
  }

}
