import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MobilesComponent } from './components/mobiles/mobiles.component';
import { FeaturesComponent } from './components/mobiles/features/features.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';

const routes: Routes = [
  { path: '', component: MobilesComponent },
  { path: 'mobiles', component: MobilesComponent},
  { path: 'mobile-features/:id', component: FeaturesComponent },
  { path: 'my-carts', component: AddCartComponent },
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
