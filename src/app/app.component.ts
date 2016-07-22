import { Component, OnInit } from '@angular/core';

@Component({
   // moduleId: module.id,
    selector: 'app-component',
    templateUrl: `app/app.component.html`
})
export class AppComponent implements OnInit {
    name: string = "Andrei 222";

    constructor() { }

    ngOnInit() { }

}