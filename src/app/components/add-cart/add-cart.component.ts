import { Component, OnInit } from '@angular/core';
import {  PhoneServiceService } from '../../services/phone-service.service';
import { HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/data-interface-types/cart';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
  
  cartData : Cart;
  total: number;
  // quantity = this.service.quantity;

  constructor(private service : PhoneServiceService,private http: HttpClient) { }
  
   ngOnInit() {
    this.cartData = this.service.carts;
    this.getCart();
  }
  
  onDelete(id){
    this.http.delete(this.service.localServerUrl+'/'+id)
    .subscribe(response=>{
      this.getCart();
      console.log(response);
    })
  }
  
  getCart(){
    this.service.getCartData().subscribe(actionArray => this.cartData = actionArray);
  }

}
