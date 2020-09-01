import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { DarkOnHoverModule } from './../../shareds/directives/dark-on-hover/dark-on-hover.module';
import { CardModule } from './../../shareds/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list.component';
import { FilterByName } from './filterByName.pipe';
import { VmenssageModule } from './../../shareds/components/vmenssage/vmenssage.module';
import { ProductModule } from './../product/product.module';
import { SearchComponent } from './search/search.component';
import { FilterByType } from './filterByType.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductsComponent,
    FilterByName,
    SearchComponent,
    FilterByType,
  ],
  imports: [
    CommonModule,
    ProductModule,
    VmenssageModule,
    CardModule,
    DarkOnHoverModule,
    NgbCarouselModule
  ]
})
export class ProductListModule { }
