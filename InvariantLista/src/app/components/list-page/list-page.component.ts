import { Component, ViewChild } from '@angular/core';
import { IgxListComponent, IgxRippleDirective } from "igniteui-angular";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message:number,
  lista:any[]
}

interface AppData {
  naziv: String,
  id: number,
  opis: String
}


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  

  @ViewChild("fruitList", { static: true })
    public fruitList: any;
    public indexOdabranog : any= null;
    message$: Observable<number>
    lista$: Observable<any[]>
   

    public data: AppData[]=[];
    
    constructor(private store:Store<AppState>) {
      this.message$ = this.store.select('message')
      this.lista$ = this.store.select('lista')

    }

    ngOnInit() {
      if(sessionStorage.getItem("state") !== null){
        var pom:any = JSON.parse(sessionStorage.getItem("state") as any);
        console.log(pom)
        this.data = pom;
      }     
    }
    
    public loadFruits() {
        this.fruitList.isLoading = true;
        setTimeout(() => {
          const startData: any[] = []
            startData.forEach((value) => { this.data.push(value); });
            this.fruitList.isLoading = false;
        }, 1000);
        
    }

    public dodajNovi(nazivText:String,idText:any,opisText:String){
      this.data.push({naziv:nazivText,id:parseInt(idText),opis:opisText})
      sessionStorage.setItem("state",JSON.stringify(this.data))
      console.log(this.fruitList)
      this.store.dispatch({type:'INCREMENT'})
    }
    public getRowData =(naziv:any,id:any,opis:any)=>{
      console.log(naziv,id,opis)
      
      console.log(this.indexOdabranog)
    }
    
    public rasporedElemenata =(smjer:Number, id:any)=>{
      this.indexOdabranog = this.data.findIndex(x=>x.id === id);
      if(smjer===0){
        if(this.indexOdabranog !==0){
        var pom:any = this.data[this.indexOdabranog];
        this.data[this.indexOdabranog]=this.data[this.indexOdabranog-1];
        this.data[this.indexOdabranog-1] = pom;
        }
        sessionStorage.setItem("state",JSON.stringify(this.data))
      }
      else if(smjer===1){
        if(this.indexOdabranog !==this.data.length-1){
          var pom:any = this.data[this.indexOdabranog];
          this.data[this.indexOdabranog]=this.data[this.indexOdabranog+1];
          this.data[this.indexOdabranog+1] = pom;
          }
          sessionStorage.setItem("state",JSON.stringify(this.data))
      }
      else{
        if(this.indexOdabranog !== null || this.indexOdabranog !== -1){
          this.data.splice(this.indexOdabranog,1)
          this.store.dispatch({type:'DECREMENT'})
        }
        sessionStorage.setItem("state",JSON.stringify(this.data))
      }
    }
}
