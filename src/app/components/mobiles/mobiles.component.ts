import { Component, OnInit} from '@angular/core';
import { PhoneServiceService } from '../../services/phone-service.service';
import { Phones } from '../../data-interface-types/phone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit{

  url='http://localhost:3000/phones';
  phones : Phones[];
  filter;

  constructor(private service: PhoneServiceService,private router: Router) {}
  
  ngOnInit() {
    this.getPhones();
  }

  getPhones(){
    this.service.getPhonesData().subscribe(phone => this.phones = phone );
  }

  addCart(data){
    this.service.getCartData().subscribe( cartData => this.filter = cartData);
    console.log(this.filter)
    for (let item of this.filter){
      console.log(item)
    }
        // console.log(entry.name);
        // console.log(data.name);
        // if(data.name !== entry.name){
        //   this.service.addCartData(data).subscribe(
        //     response => {
        //       this.service.getCartData().subscribe(updateData => this.service.carts = updateData);
        //       this.router.navigate(['/my-carts']);
        //       console.log(response);
        //     },
        //     error => {
        //       console.log(error);
        //     }
        //   );
        // }else{
        //   console.log('found');
        //   this.router.navigate(['/my-carts']);
        // }
      // if(data){
      //   for (let entry of this.filter){
      //     console.log(entry.id)
      //   }

      //   console.log(this.filter.name);
      //   console.log(data.name);
      // }
  }

}
