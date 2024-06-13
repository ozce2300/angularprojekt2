import { Routes } from '@angular/router';
import { KurserComponent } from './kurser/kurser.component';
import { LaddakurserComponent } from './laddakurser/laddakurser.component';

export const routes: Routes = [
    {path: "", component: KurserComponent},
    {path: "kurser", component:LaddakurserComponent},
    {path: "**", redirectTo: ""}
];
