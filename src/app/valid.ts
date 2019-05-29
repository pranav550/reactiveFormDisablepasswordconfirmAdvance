import { AbstractControl,Validator } from '@angular/forms';
export function ValidatePassword(control: AbstractControl) {
    
 if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/.test(control.value)) {
   return { validPassword: true };
 }
 return null;
 }





  