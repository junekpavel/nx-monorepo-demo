import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundErrorPageComponent } from "./not-found-error-page/not-found-error-page.component";

const routes: Routes = [
  {
    path: "not-found",
    component: NotFoundErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundErrorPageRoutingModule {}
