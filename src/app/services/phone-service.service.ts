import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phones } from '../data-interface-types/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService{
  
  phoneDataUrl = `assets/phones/phones.json`;
  localServerUrl='http://localhost:3000/phones';
  // id: string;

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

  addCartData(data):Observable<any>{
    var body = {
      imageUrl: data.imageUrl,
      name: data.name,
      price: data.price
    };
    // if(data.id = this.carts.id){
      return this.http.post<any>(this.localServerUrl, body)
    // }else{
    //   console.log('found');
    // }
  }

}
