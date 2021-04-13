import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IgxButtonModule,IgxListModule} from 'igniteui-angular'
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './simple.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxListModule,
    StoreModule.forRoot({message:simpleReducer})
  ],
  providers: [],
  exports: [AppRoutingModule, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
