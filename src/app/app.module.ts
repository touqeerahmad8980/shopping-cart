import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
 

import { AppComponent } from './app.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { FeaturesComponent } from './components/mobiles/features/features.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';

import { PhoneServiceService } from './services/phone-service.service';
// material design modules
import {MatBadgeModule ,MatIconModule,MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent,
    FeaturesComponent,
    AddCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    
  ],
  providers: [PhoneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
