import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[POST] Edit';
export const UPVOTE = '[POST] Upvote';
export const DOWNVOTE = '[POST] Downvote';
export const RESET = '[POST] Reset';

export class EditText implements Action{
  readonly type: string = EDIT_TEXT;
  constructor(public payload: string){}
}

// No constructor for the rest of the classes, because of no data payload
// (transmitted data that is the actual intended message)
export class Upvote implements Action {
  readonly type: string = UPVOTE;
}

export class Downvote implements Action {
  readonly type: string = DOWNVOTE;
}

export class Reset implements Action {
  readonly type: string = RESET;
}

// Export all the actions as a single type
export type All = Upvote | Downvote | Reset | EditText;
