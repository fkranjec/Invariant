import {Action} from '@ngrx/store';

export function simpleReducer(state:number=sessionStorage.getItem("state")===null? 0 : JSON.parse(sessionStorage.getItem("state") as any).length, action:Action){
    console.log(action.type,state);
    switch(action.type){
        case 'INCREMENT' : return state=state+1;
        
        case 'DECREMENT' : return state=state-1;

        default: return state;
        
    }
}