import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phones } from '../data-interface-types/phone';
import { AngularFirestore } from '@angular/fire/firestore';

export class POSTS {
  // id: number;
  title: string;
  // body: string;
  // userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  formData: Phones;

  phoneDataUrl = `assets/phones/phones.json`;
  localServerUrl='http://localhost:3000/phones';

  constructor(private http: HttpClient, private firestore : AngularFirestore) { }

  getPhonesData():Observable<Phones[]>{
    return this.http.get<Phones[]>(this.phoneDataUrl);
  }
  
  getCartData(){
    return this.http.get<any[]>(this.localServerUrl);
  }

}
