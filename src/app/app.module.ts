import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './pages/login/login.module';
import {HomePageModule} from './pages/home-page/home-page.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    HomePageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
