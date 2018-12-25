import { Component, OnInit} from '@angular/core';
import { PhoneServiceService } from '../../../services/phone-service.service';
import { Phones } from '../../../data-interface-types/phone';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  
  url='http://localhost:3000/phones';

  cart : Phones;
  phones : Phones[];
  constructor(private service: PhoneServiceService,
    private firestore : AngularFirestore,
    private http: HttpClient
    ) {}
  
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
      this.cart = data;
      console.log(JSON.stringify(this.cart));
    });
  }

}
