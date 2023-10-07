import { Component } from '@angular/core';
import { ScreenSizeService } from '../../../../services/screen-size.service';

@Component({
  selector: 'stw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(
    public _screenSizeService: ScreenSizeService,
  ) { }
}
