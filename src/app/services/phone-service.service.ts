import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phones } from '../data-interface-types/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  phoneDataUrl = `assets/phones/phones.json`;

  constructor(private http: HttpClient) { }

  getPhonesData():Observable<Phones[]>{
    return this.http.get<Phones[]>(this.phoneDataUrl);
  }

}
