import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MobilesComponent } from './components/shopping-store/mobiles/mobiles.component';
import { FeaturesComponent } from './components/shopping-store/mobiles/features/features.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/mobiles', pathMatch: 'full' },
  { path: 'mobiles', component: MobilesComponent},
  { path: 'mobile-features/:id', component: FeaturesComponent },
  { path: 'my-carts', component: AddCartComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
