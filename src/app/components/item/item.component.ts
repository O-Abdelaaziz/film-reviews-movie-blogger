import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  public movieData: Movie | null = null;
  public baseUrlImage = environment.BASE_IMAGES_URL_ORIGINAL;

  constructor() {
  }

  ngOnInit(): void {
  }

}
