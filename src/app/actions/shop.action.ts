import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Shops } from "../models/shops";

// Section 2
export const ADD_SHOP = "[SHOP] Add";
export const REMOVE_SHOP = "[SHOP] Remove";

// Section 3
export class AddShop implements Action {
  readonly type = ADD_SHOP;

  constructor(public payload: Shops) {}
}

export class RemoveShop implements Action {
  readonly type = REMOVE_SHOP;

  constructor(public payload: number) {}
}

// Section 4
export type Actions = AddShop | RemoveShop;
