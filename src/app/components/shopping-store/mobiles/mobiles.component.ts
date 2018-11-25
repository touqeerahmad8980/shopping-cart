import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {

  // id;
  mobile_features;
  // mobiles_list : string = ;
  mobile_data = this.http.get(`assets/phones/phones.json`);
  // mobile_data;
  // data =  this.mobile_featurese();
  
  
  constructor( private http:HttpClient) {
    

   }
  
  ngOnInit() {
  }
  
  mobile_feature(id : string){
    this.mobile_features = this.http.get(`assets/phones/details/${id}.json`);
  }
  
}
