import { Component, OnInit } from '@angular/core';
import {  PhoneServiceService } from '../../services/phone-service.service';
import { Phones } from 'src/app/data-interface-types/phone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
  
  cartData;
  
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
