import {Component} from 'angular2/core';
/// <reference path="../typings/tsd.d.ts" />
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/filter'
import { PostService } from './post.service'
import { HTTP_PROVIDERS } from 'angular2/http'
import { OnInit } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'



@RouteConfig([

    {path: '/*other', name: 'Other', redirectTo: ['Albums']}
])

@Component({
    selector: 'my-app',
    template: `

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['Albums']">Albums</a></li>
                <li><a [routerLink]="['Contact']">Contact</a></li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>


<router-outlet></router-outlet>
    
        <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        
        
    `,
    directives: [ROUTER_DIRECTIVES],

    providers: [PostService, HTTP_PROVIDERS]

})
export class AppComponent{ 
        isLoading = false;
    


}