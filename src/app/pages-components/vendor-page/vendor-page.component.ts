import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VendorService} from '../../services/vendor.service';
import {Vendor} from '../../models/vendor.model';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.scss'],
})
export class VendorPageComponent implements OnInit {
  public id: number;

  public vendor: Vendor;

  constructor(private route: ActivatedRoute, private vendorService: VendorService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.vendorService.getVendor(this.id).subscribe((data) => {
      this.vendor = data;
    });
  }
}
