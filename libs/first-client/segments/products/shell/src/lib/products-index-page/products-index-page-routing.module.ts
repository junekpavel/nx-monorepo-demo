import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsIndexPageComponent } from './products-index-page/products-index-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsIndexPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsIndexPageRoutingModule { }
