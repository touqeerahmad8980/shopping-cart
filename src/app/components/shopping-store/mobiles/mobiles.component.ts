import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {

  badgecount: number = 0;
  mobile_features;
  mobile_data = this.http.get(`assets/phones/phones.json`);
  
  incrementCount(): void{
    this.badgecount++;
    console.log(this.badgecount);
  }
  constructor( private http:HttpClient) {

   }
  ngOnInit() {
    console.log(this.incrementCount())
  }
  
  mobile_feature(id : string){
    this.mobile_features = this.http.get(`assets/phones/details/${id}.json`);
  }

}
