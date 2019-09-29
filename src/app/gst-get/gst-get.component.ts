import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/business_model';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  bisnis: Business[];

  constructor(private dt: BusinessService) { console.log('GET');}

  refresh() {
    location.reload();
  }

  ngOnInit() {
    this.dt.getBusinesses().subscribe((data: Business[]) =>{
      this.bisnis = data;
      console.log(data);
    });
  }

  deleteBusiness(data) {
    this.dt.delete(data).subscribe(response => {
      console.log('deleted', response);
      this.ngOnInit(); // untuk menyinkronkan setelah dihapus data akan berkurang
    });
  }
}
