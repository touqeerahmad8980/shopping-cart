import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  id: string;
  sub: any;
  mobile_features;
    
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.id = params['id']);
    this.mobile_features = this.getPhonesFeatures();
  }
  getPhonesFeatures():Observable<any>{
    return this.http.get<any>(`assets/phones/details/${this.id}.json`);
  }

}
