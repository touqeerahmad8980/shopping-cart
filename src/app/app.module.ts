import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
 

import { AppComponent } from './app.component';
import { ShoppingStoreComponent } from './components/shopping-store/shopping-store.component';
import { MobilesComponent } from './components/shopping-store/mobiles/mobiles.component';
import { FeaturesComponent } from './components/shopping-store/mobiles/features/features.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';

import { PhoneServiceService } from './services/phone-service.service';
// material design modules
import {MatBadgeModule ,MatIconModule,MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingStoreComponent,
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    
  ],
  providers: [PhoneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
