import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ShoppingStoreComponent } from './components/shopping-store/shopping-store.component';
import { MobilesComponent } from './components/shopping-store/mobiles/mobiles.component';
import { FeaturesComponent } from './components/shopping-store/mobiles/features/features.component';

import { PhoneServiceService } from './services/phone-service.service';
// material design modules
import {MatBadgeModule ,MatIconModule,MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingStoreComponent,
    MobilesComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    
  ],
  providers: [PhoneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
