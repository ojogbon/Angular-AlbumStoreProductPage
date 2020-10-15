import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
 albumInfo;
  
  private _productService_ : ProductService;

  constructor(private _productService : ProductService) { 
      this._productService_ = _productService;
  }

  ngOnInit() {
    const tg = this._productService_.getAlbum(1)
    .subscribe(response => 
      {this.albumInfo = response;
    });
  }

}
