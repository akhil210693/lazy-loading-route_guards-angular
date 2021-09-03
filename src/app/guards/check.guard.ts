import { Injectable } from '@angular/core';
import { CanActivate,CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(
    contact:ContactComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(contact.user.fname!="" || contact.user.lname!=""){
      return window.confirm("do u want to leave the unsaved information");
    }
    if(contact.user.email!="" || contact.user.phone!=""){
      return window.confirm("do u want to leave the unsaved information");
    }
    if(contact.user.address!="" ){
      return window.confirm("do u want to leave the unsaved information");
    }
      return true;
  }
  
}
