import { Action } from '@ngrx/store';

// Takes the current state and copy it over the to new state
// based on whatever changes the action is trying to make
export function reducer(state: string = 'Hello World!', action: Action){
  console.log(action.type, state);

  // Application state is string so we can return brand new string
  switch(action.type){
    case 'Bulgarian':
      return state = 'Здравей свят!';

    case 'German':
      return state = 'Hallo welt!';

    case 'English':
      return state = 'Hello World!';

    default:
      return state;
  }

}
