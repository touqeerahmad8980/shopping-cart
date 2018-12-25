import { Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { PhoneServiceService } from '../../services/phone-service.service';
import { Phones } from '../../data-interface-types/phone';
import { HttpClient} from "@angular/common/http";
import { AddCartComponent } from '../add-cart/add-cart.component';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {

  @ViewChildren(AddCartComponent) child: AddCartComponent;
  
  url='http://localhost:3000/phones';
  cart : Phones;
  phones : Phones[];

  constructor(private service: PhoneServiceService, private http: HttpClient) {}
  
  ngOnInit() {
    this.getPhones();
  }

  getPhones(){
    this.service.getPhonesData().subscribe(phone => this.phones = phone );
  }

  addCart(data: Phones){
    var body = {
      imageUrl: data.imageUrl,
      name: data.name,
      price: data.price
    };
    this.http.post<Phones>(this.url, body).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.child.getCart();
    });
  }

}
