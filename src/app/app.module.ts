import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LinkComponent } from './component/link/link.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {  AboutComponent} from './component/about/about.component'
import { SingComponent } from './component/sing/sing.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkComponent,
    NavbarComponent,
    AboutComponent,
    SingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
