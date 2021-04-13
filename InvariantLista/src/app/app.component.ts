import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message:number
  lista:any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InvariantLista';
  message$: Observable<number>;
  lista$:Observable<Array<any>>;
  constructor(private store:Store<AppState>){
    this.message$ = this.store.select('message');
    this.lista$ = this.store.select('lista')
  }
  
  
}
