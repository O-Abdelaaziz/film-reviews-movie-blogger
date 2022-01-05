import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  public movies: Movie[] = [];
  public baseUrlImage = environment.BASE_IMAGES_URL_ORIGINAL;

  constructor() {
  }

  ngOnInit(): void {
  }

}
