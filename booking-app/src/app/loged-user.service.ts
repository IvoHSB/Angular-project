
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LogedUser implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

        if (localStorage.getItem("user")) {
            return true;
        } else {
            this.router.navigate(['/404']);
        }
    }
}