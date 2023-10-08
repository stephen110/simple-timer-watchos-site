import { Component } from '@angular/core';

@Component({
  selector: 'stw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentDate = new Date();
}
