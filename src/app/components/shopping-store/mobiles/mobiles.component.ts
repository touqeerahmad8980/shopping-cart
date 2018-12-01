import { Component, OnInit} from '@angular/core';
import { PhoneServiceService } from '../../../services/phone-service.service';
import { Phones } from '../../../data-interface-types/phone';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  
  phones : Phones[];
  constructor(private service: PhoneServiceService) {}
  
  ngOnInit() {
    this.getPhones();
  }

  getPhones(){
    this.service.getPhonesData().subscribe(phone => this.phones = phone );
  }

}
