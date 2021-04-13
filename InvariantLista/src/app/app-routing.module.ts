import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import {ListPageComponent} from './components/list-page/list-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'lista', component: ListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
