import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-proinfo',
  templateUrl: './proinfo.component.html',
  styleUrls: ['./proinfo.component.css'],
})
export class ProinfoComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      this.shopService.getProductById(productId).subscribe((data) => {
        this.product = data;
      });
    } else {
      console.error('Product ID is null');
    }
  }
}
