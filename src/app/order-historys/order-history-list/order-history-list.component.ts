import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Product } from './../../products/product/products-type/product';
import { ProductService } from './../../products/product/product.service';
import { TokenPayload } from 'src/app/core/user/token-payload';
import { UserService } from 'src/app/core/user/user.service';
import { OrderHistory } from '../order-history/order-history';
import { OrderHistoryService } from '../order-history/order-history.service';

@Component({
  templateUrl: './order-history-list.component.html',
})
export class OrderHistoryListComponent implements OnInit{
  public user: TokenPayload;
  public orders: OrderHistory[];
  constructor(
    private orderHistoryService: OrderHistoryService,
    private userService: UserService,
    // private productService: ProductService
  ) { }
  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(user => this.user = user);
    this.orderHistoryService.findOrderHistorysByOwnerEmail(this.user.email)
      .subscribe(order => {
        console.log(order);
        this.orders = order;
      });
  }
  }

