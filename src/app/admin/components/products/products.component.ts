import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){
    super(spinner)
  }
  ngOnInit(): void {
    this.showwSpinner(SpinnerType.BallScaleMultiple);
    this.httpClientService.get({
      controller:"Product"
    }).subscribe(data=> console.log(data))

    // this.httpClientService.post({
    //      controller: "Product"
    //    }, {
    //      name: "Kalem",
    //      stock: 100,
    //      price: 15
    //    }).subscribe();

    //  this.httpClientService.put({
    //    controller: "Product",
    //  }, {
    //    id: "50569d32-ba3d-43fe-943a-fe30356100b5",
    //    name: "Renkli Kağıt",
    //    stock: 1500,
    //    price: 5.5
    //  }).subscribe()

  }

}
