import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/components/home/home.component';
import { ButtonDegradeComponent } from './shared/button-degrade/buttonDegrade.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ButtonDegradeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}