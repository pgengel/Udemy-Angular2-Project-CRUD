import {Component} from 'angular2/core';

import {ContactFormComponent} from './Contact/contact-form.component'

/// <reference path="../typings/tsd.d.ts" />
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/filter'
import { PostService } from './Services/HttpPost/post.service'
import { HTTP_PROVIDERS } from 'angular2/http'
import { OnInit } from 'angular2/core'

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { AlbumsComponent } from './Albums/albums.component'
import { ContactComponent } from './Contact/contact.component'
import { NavBarComponent } from './Navbar/navbar.component'



@RouteConfig([
    {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    {path: '/album/:id', name: 'Album', component: AlbumsComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Albums']}
])

@Component({
    selector: 'my-app',
    template: `

                <navbar></navbar>
                <router-outlet></router-outlet>
                    
    `,
    directives: [NavBarComponent,
                 ROUTER_DIRECTIVES],

    pipes: [],
    providers: [PostService, HTTP_PROVIDERS]

})
export class AppComponent implements OnInit{ 
        //isLoading = true;
    
    constructor(private _postService: PostService){
        //this._postService.createPost({userId: 1, title: 'a', body: "b"});
    }

    ngOnInit(){
            // this._postService.getPosts()
            // .subscribe(post => {
            //     console.log(post[0].title);
            //     this.isLoading = false;
            // });  
    }
    
    // post = {
    //     title : "Angular Tut for beginner",
    //     isFavourite: true,
    //     body: `
    //         dfsgdfg sdfg sdfgs, dfgsh  gsdfgse sdfgs. fghjfghj fghjh hjkghuu,
    //         qwerw werew asdsdfg, dfgsdfgbnnmb bnmbm. vbnmvv b vbnm.
    //     `
    // }

    // course = {
    //     title: "Angular 2 to start",
    //     rating: 4.48464,
    //     students: 579,
    //     price: 345.56,
        
    // }

    // tweet = {
    //     totalLikes: 10,
    //     iLike: false
    // }

    // onFavouriteChange($event){
    //     console.log($event);
    // }
}