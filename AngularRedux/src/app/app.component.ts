import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularRedux';

  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    // Observe the message with the select method
    this.message$ = store.select('message');
  }

  // Send actions to the reducer function to change the state
  bulgarianMessage() {
    this.store.dispatch({ type: 'Bulgarian' });
  }

  // Type is the action that we are trying to perform
  germanMessage() {
    this.store.dispatch({ type: 'German' });
  }

  englishMessage() {
    this.store.dispatch({ type: 'English' });
  }
}
