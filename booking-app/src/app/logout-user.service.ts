
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LogoutUser implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

        if (localStorage.getItem("user")) {
            this.router.navigate(['/404']);
        } else {
            return true;
        }
    }
}