import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";
import {SecureComponent} from "./secure/secure.component";
import {SecureGuard} from "./secure/secure-guard.service";
import {LoginComponent} from "./login/login.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'page-one', component: PageOneComponent }
            ,{ path: 'page-two', component: PageTwoComponent }
            ,{ path: 'login', component: LoginComponent }
            ,{
                path: 'secure',
                component: SecureComponent,
                canActivate: [ SecureGuard ]
            }
            ,{ path: '', redirectTo: 'page-one', pathMatch: 'full' }
            ,{ path: '**', redirectTo: 'page-one', pathMatch: 'full' }
        ])
    ]
    ,exports: [ RouterModule ]
})
export class AppRoutingModule{};