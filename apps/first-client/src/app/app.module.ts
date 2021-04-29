import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCTS_RESOURCE_CONFIGURATION } from '@nx-monorepo-demo/first-client/segments/products/util';
import { ProductsResourceConfiguration } from '@nx-monorepo-demo/first-client/segments/products/util';
import { environment } from '../environments/environment';


const productsResourceConfiguration: ProductsResourceConfiguration = {
  productsApiResourceUrl: environment.productsApiUrl,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: PRODUCTS_RESOURCE_CONFIGURATION, useValue: productsResourceConfiguration},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
