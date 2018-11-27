import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  badgecount: number = 0;
  // id;
  mobile_features;
  // mobiles_list : string = ;
  mobile_data = this.http.get(`assets/phones/phones.json`);
  // mobile_data;
  // data =  this.mobile_featurese();
  
  incrementCount(): void{
    // this.badgecount = 5;
    this.badgecount++;
    // return this.badgecount;
    console.log(this.badgecount);
  }
  constructor( private http:HttpClient) {
    
    // this.badgecount = 5;

   }
  ngOnInit() {
    console.log(this.incrementCount())
  }
  
  mobile_feature(id : string){
    this.mobile_features = this.http.get(`assets/phones/details/${id}.json`);
  }
  
}
