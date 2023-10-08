import { Component } from '@angular/core';
import { ScreenSizeService } from '../../../../services/screen-size.service';

@Component({
  selector: 'stw-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  constructor(
    public _screenSizeService: ScreenSizeService,
  ) { }
}
