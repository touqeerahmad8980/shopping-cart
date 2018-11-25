import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ShoppingStoreComponent } from './components/shopping-store/shopping-store.component';
import { MobilesComponent } from './components/shopping-store/mobiles/mobiles.component';
import { FeaturesComponent } from './components/shopping-store/mobiles/features/features.component';

// material design modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

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

    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
