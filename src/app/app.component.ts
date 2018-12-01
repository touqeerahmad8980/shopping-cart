import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Shooping-Cart-Application';
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

  iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('/assets/phones/svg/shopping_cart.svg')); }

  ngOnInit(){
  }
}
