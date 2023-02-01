import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LinkComponent } from './component/link/link.component';
import {AboutComponent} from './component/about/about.component';
const routes: Routes = [
  
  {path:'home',component :HomeComponent},
  {path:'link',component :LinkComponent},
  {path:'about',component :AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
