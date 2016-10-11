import { Component } from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/Contact/contact-form.component.html',
    styleUrls: ['app/Contact/contact-form.styles.css'],
})
export class ContactFormComponent {
    onSubmit(form){
        console.log(form);
    }
}