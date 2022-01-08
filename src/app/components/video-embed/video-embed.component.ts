import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input()
  public videoSite: string = 'Youtube';
  @Input()
  public videoTitle: string | null = null;
  @Input()
  public videoKey: string | null = null;

  constructor(private _domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  onGetSafeUrl(url: string) {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
