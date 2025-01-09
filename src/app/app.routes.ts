import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import path from 'path';
import { Component } from '@angular/core';


export const routes: Routes = [

    {path:"", component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"contact", component:AboutComponent},
    {path:"service", component:AboutComponent}
];
