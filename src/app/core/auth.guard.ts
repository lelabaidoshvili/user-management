import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const username = next.queryParams['username'];
    const password = next.queryParams['password'];
    console.log('username:', username, 'password:', password);
    if (username === 'admin' && password === 'admin') {
      console.log('access granted');
      return true; // allow access to the home page
    } else {
      console.log('access denied');
      return false; // deny access
    }
  }
}
