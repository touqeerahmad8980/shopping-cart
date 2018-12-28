import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { PhoneServiceService } from '../../services/phone-service.service';
import { Phones } from '../../data-interface-types/phone';
import { Router } from '@angular/router';
import { AddCartComponent } from '../add-cart/add-cart.component';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit{


  url='http://localhost:3000/phones';
  phones : Phones[];
  quantity: number = 1;
  filter: any[];

  constructor(private service: PhoneServiceService,private router: Router) {}
  
  ngOnInit() {
    this.getPhones();
    this.service.getCartData();
  }

  getPhones(){
    this.service.getPhonesData().subscribe(phone => this.phones = phone );
  }

addCart(data){
  this.service.getCartData().subscribe(cartData => {this.filter = cartData  
    let result = this.filter.find(ob => ob['name'] === data.name);
      if(result){
        // this.service.quantity++;
        console.log('Already find');
        console.log(result.quantity = this.quantity++);
        this.router.navigate(['/my-carts']);
      }
      else{
        this.service.addCartData(data).subscribe(
          response => {
            this.service.getCartData().subscribe(updateData => this.service.carts = updateData);
            this.router.navigate(['/my-carts']);
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
        console.log('false');
      }
    });
  }
}
