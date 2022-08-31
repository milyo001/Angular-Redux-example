import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../redux/postReducer/postModel';
import * as PostActions from '../redux/postReducer/post.actions';
import { createViewChild } from '@angular/compiler/src/core';

interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('postText') postTextEl;

  title = 'AngularRedux';

  message$: Observable<string>;
  post$: Observable<Post>;

  constructor(private store: Store<AppState>) {
    // Observe the message with the select method
    this.message$ = store.select('message');
    this.post$ = store.select('post');
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

  // Post reducer methods
  editText() {
    let postText = this.postTextEl.nativeElement.value;
    // postText is the value of the input field in the HTML template
    this.store.dispatch(new PostActions.EditText(postText));
    this.postTextEl.nativeElement.value = '';
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
  }
}
