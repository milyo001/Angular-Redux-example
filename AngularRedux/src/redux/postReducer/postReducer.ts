import * as PostActions from './post.actions';
import { Post } from './postModel';

export type Action = PostActions.All;

/// Default app state
const defaultState: Post = {
  text: 'Hello I am default post.',
  likes: 0
}

// Helper function to create new object state
const newState = (state, newData) => {
  // Object.assign will build a new object. Pass an empty object and then
  // the state and any new data
  return Object.assign({}, state, newData)
}

export function postReducer(state: Post = defaultState, action: Action){
  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, { text: action.payload });

    case PostActions.UPVOTE:
      return newState(state, { likes: state.likes + 1 });

    case PostActions.DOWNVOTE:
      if(state.likes >= 1){
      return newState(state, { likes: state.likes - 1 });
      }
      else{
        return newState(state, { likes: state.likes })
      }

    case PostActions.RESET:
      return defaultState;

    default: return state;
  }
}
