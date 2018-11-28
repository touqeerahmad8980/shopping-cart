import { Component, ViewChild, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { MobilesComponent } from '../app/components/shopping-store/mobiles/mobiles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild(MobilesComponent) child;
  // ngAfterViewInit() {
  //   this.child.incrementCount();
  //   console.log(this.child.incrementCount());
  // }
  // badgecount = this.child.incrementCount();
  title = 'Shooping-Cart-Application';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/phones/svg/shopping_cart.svg'));
  }
  // customfunct(){
  //   this.child.incrementCount();
  // }
  ngAfterViewInit(){
    this.child.incrementCount();
    console.log(this.child.incrementCount());
    // console.log('only after T?HIS EVENT "child" is usable!!');
    // console.log(this.child.incrementCount());
  }

  ngOnInit(){
  }
}
