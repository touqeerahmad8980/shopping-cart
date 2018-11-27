import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shooping-Cart-Application';
  badgeCount: number;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.badgeCount = 5;
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/phones/svg/shopping_cart.svg'));
  }
  incrementCount() {
    this.badgeCount++;
  }
}
