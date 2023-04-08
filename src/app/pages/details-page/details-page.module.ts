import { NgModule } from '@angular/core';
import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    DetailsPageRoutingModule,
    SharedModule
  ]
})
export class DetailsPageModule { }
