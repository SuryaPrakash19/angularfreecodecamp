import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  static ValidateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidName: true,
      };
    }
    return null;
  }
  static ValidateSpecialChar(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      if (value.includes(char)) {
        return {
          invalidSpeacialChar: true,
        };
      }
      return null;
    };
  }
  static validateDate(fg: FormGroup) {
    const checkinDate = new Date(fg.get('checkinDate')?.value);
    const checkoutDate = new Date(fg.get('checkoutDate')?.value);
    if (checkinDate > checkoutDate) {
      fg.get('checkoutDate')?.setErrors({
        invalidDate: true,
      });
      return {
        invalidDate: true,
      };
    } else {
      fg.get('checkoutDate')?.setErrors(null);
    }
    return null;
  }
}
