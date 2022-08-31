import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[POST] Edit';
export const UPVOTE = '[POST] Upvote';
export const DOWNVOTE = '[POST] Downvote';
export const RESET = '[POST] Reset';

export class EditText implements Action {
  readonly type: string = EDIT_TEXT;
  constructor(public payload: string) {}
}

// Data payload is nullable (optional)
// (transmitted data that is the actual intended message)
export class Upvote implements Action {
  readonly type: string = UPVOTE;
  constructor(public payload?: string) {}
}

export class Downvote implements Action {
  readonly type: string = DOWNVOTE;
  constructor(public payload?: string) {}
}

export class Reset implements Action {
  readonly type: string = RESET;
  constructor(public payload?: string) {}
}

// Export all the actions as a single type
export type All = Upvote | Downvote | Reset | EditText;
