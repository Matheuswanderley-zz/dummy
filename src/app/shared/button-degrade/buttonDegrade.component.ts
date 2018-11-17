import { Component } from '@angular/core';

@Component({
    selector: 'button-degrade',
    templateUrl: './buttonDegrade.component.html',
    styleUrls: ['./buttonDegrade.component.css']
})

export class ButtonDegradeComponent {

    constructor(){}

    alert(){
        console.log('oi')
    }
}