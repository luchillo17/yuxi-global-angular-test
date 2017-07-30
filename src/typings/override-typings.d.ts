import { Action } from "@ngrx/store";

declare module '@ngrx/store' {
  interface Action {
    type: string
    payload?: any
  }
}
