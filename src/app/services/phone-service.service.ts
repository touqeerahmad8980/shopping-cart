import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phones } from '../data-interface-types/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {
  
  phoneDataUrl = `assets/phones/phones.json`;
  localServerUrl='http://localhost:3000/phones';
  id: string;

  constructor(private http: HttpClient) { }

  getPhonesData():Observable<Phones[]>{
    return this.http.get<Phones[]>(this.phoneDataUrl);
  }

  getCartData():Observable<any[]>{
    return this.http.get<any[]>(this.localServerUrl);
  }

  getPhonesFeatures(id):Observable<any>{
    return this.http.get<any>(`assets/phones/details/${id}.json`);
  }

}
