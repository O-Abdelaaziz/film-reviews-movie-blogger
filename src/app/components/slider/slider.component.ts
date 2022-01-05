import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {environment} from "../../../environments/environment";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger(
      'fade',
      [state('void', style({opacity: 0})),
      transition('void => *',[animate('1s')]),
      transition('* => void',[animate('500ms')])
      ])
  ]
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
