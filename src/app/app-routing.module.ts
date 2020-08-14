import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './core/auth/auth.guards';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list/product-list.component';
import { OrderHistoryComponent } from './order-historys/order-history/order-history.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
