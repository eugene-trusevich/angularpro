import {Action} from '@ngrx/store';
export function counterReducer(state: number, action: Action){
  switch (action.type){
    case 'increment': return state + 1 ;
    case 'dencrement': return state - 1 ;
    default: return state;
  }
}
