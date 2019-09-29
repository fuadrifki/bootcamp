import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/business_model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gst-detail',
  templateUrl: './gst-detail.component.html',
  styleUrls: ['./gst-detail.component.css']
})
export class GstDetailComponent implements OnInit {
  bisnis: Business;

  constructor(private params: ActivatedRoute, private route: Router, private dt: BusinessService) { console.log('GET');}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.dt.edit(params['id']).subscribe(res => {
    //     this.bisnis = res;
    //   });
    // });
  }

}
