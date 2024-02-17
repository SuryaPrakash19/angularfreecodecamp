import { Component } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export class X {
  public static snackbar: any;
  constructor(snackbar: MatSnackBar) {
    X.snackbar = snackbar;
  }
}

export const bookingGuard: CanDeactivateFn<BookingComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.bookingForm.pristine) return component.bookingForm.pristine;
  else {
    //problemooooooooooooooo
    X.snackbar.open('You have unsaved changes!');
    return false;
  }
};
