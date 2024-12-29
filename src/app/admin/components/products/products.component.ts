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
    
  }

}
