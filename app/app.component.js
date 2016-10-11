System.register(['angular2/core', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/filter', './Services/HttpPost/post.service', 'angular2/http', 'angular2/router', './Albums/albums.component', './Contact/contact.component', './Navbar/navbar.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, http_1, router_1, albums_component_1, contact_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //isLoading = true;
                function AppComponent(_postService) {
                    this._postService = _postService;
                    //this._postService.createPost({userId: 1, title: 'a', body: "b"});
                }
                AppComponent.prototype.ngOnInit = function () {
                    // this._postService.getPosts()
                    // .subscribe(post => {
                    //     console.log(post[0].title);
                    //     this.isLoading = false;
                    // });  
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/albums', name: 'Albums', component: albums_component_1.AlbumsComponent, useAsDefault: true },
                        { path: '/album/:id', name: 'Album', component: albums_component_1.AlbumsComponent },
                        { path: '/contact', name: 'Contact', component: contact_component_1.ContactComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n                <navbar></navbar>\n                <router-outlet></router-outlet>\n                    \n    ",
                        directives: [navbar_component_1.NavBarComponent,
                            router_1.ROUTER_DIRECTIVES],
                        pipes: [],
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map