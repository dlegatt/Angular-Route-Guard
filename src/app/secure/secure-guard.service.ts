import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot} from "@angular/router";

@Injectable()
export class SecureGuard implements CanActivate {
    constructor(private  router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        //this.router.navigate(['/login']);
        console.log('Not logged in');
        return true;
    }
}