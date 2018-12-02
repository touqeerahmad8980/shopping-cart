import { Component, OnInit} from '@angular/core';
import { PhoneServiceService } from '../../../services/phone-service.service';
import { Phones } from '../../../data-interface-types/phone';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  
  phones : Phones[];
  constructor(private service: PhoneServiceService,
    // private firestore : AngularFirestore
    ) {}
  
  ngOnInit() {
    this.getPhones();
  }

  getPhones(){
    this.service.getPhonesData().subscribe(phone => this.phones = phone );
  }

  onItemClick(price: number){
    // this.firestore.collection('add-to-cart').add(price.valueOf);
    console.log("price: ",price);
  }

}
