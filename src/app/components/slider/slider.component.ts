import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  public movies: Movie[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
