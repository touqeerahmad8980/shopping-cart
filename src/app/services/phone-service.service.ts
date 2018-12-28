import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phones } from '../data-interface-types/phone';
import { Cart } from '../data-interface-types/cart';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService{
  
  phoneDataUrl = `assets/phones/phones.json`;
  localServerUrl='http://localhost:3000/phones';
  quantity: number = 1;

  constructor(private http: HttpClient) { }

  carts;

  getPhonesData():Observable<Phones[]>{
    return this.http.get<Phones[]>(this.phoneDataUrl);
  }

  getPhonesFeatures(id):Observable<any[]>{
    return this.http.get<any[]>(`assets/phones/details/${id}.json`);
  }
  
  getCartData():Observable<any>{
    return this.http.get<any>(this.localServerUrl);
  }

  addCartData(data):Observable<Cart[]>{
    var body = {
      id: data.id,
      imageUrl: data.imageUrl,
      name: data.name,
      price: data.price,
      quantity: 1
    };
      return this.http.post<Cart[]>(this.localServerUrl, body)
  }

  // updatePost(item) {
  //   this.quantity++;
  //   const httpOptions = {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   };
  //   var body = {
  //     id: item.id,
  //     imageUrl: item.imageUrl,
  //     name: item.name,
  //     price: item.price,
  //     quantity: item.quantity = this.quantity
  //   };
  //   return this.http.put(this.localServerUrl+'/'+item.id, body, httpOptions)
  //   .subscribe(res => {
  //       console.log(res);
  //     }
  //   );
  // }

}
