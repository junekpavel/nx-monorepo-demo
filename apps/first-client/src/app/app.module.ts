import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {
  PRODUCTS_RESOURCE_CONFIGURATION,
  ProductsResourceConfiguration,
} from "@nx-monorepo-demo/first-client/segments/products/util";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

const productsResourceConfiguration: ProductsResourceConfiguration = {
  productsApiResourceUrl: environment.productsApiUrl,
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: PRODUCTS_RESOURCE_CONFIGURATION,
      useValue: productsResourceConfiguration,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
