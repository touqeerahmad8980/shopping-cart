import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PhoneServiceService } from 'src/app/services/phone-service.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})

export class FeaturesComponent implements OnInit {
  sub: any;
  mobile_features;
  id;

  constructor(private route: ActivatedRoute,private service: PhoneServiceService) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.id = params['id']);
    this.service.getPhonesFeatures(this.id).subscribe(data => this.mobile_features = data);
  }

}
