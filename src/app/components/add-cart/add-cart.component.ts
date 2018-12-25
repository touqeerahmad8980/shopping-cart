import { Component, OnInit } from '@angular/core';
import {  PhoneServiceService } from '../../services/phone-service.service';
import { Phones } from 'src/app/data-interface-types/phone';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {

  url='http://localhost:3000/phones';

  cart : Phones[];

  constructor(private service : PhoneServiceService,private firestore: AngularFirestore,private http: HttpClient) { }

  ngOnInit() {
    this.service.getCartData().subscribe(actionArray => this.cart = actionArray);
  }
  
  onDelete(id){
    this.http.delete(this.url+'/'+id)
    .subscribe(response=>{
      console.log(response)
    })
  }

}
