import { Routes } from '@angular/router';
import { EditWomensClothesComponent } from '../pages/edit-womens-clothes/edit-womens-clothes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'edit-womens-clothes', component: EditWomensClothesComponent},
    {path:'home', component: HomeComponent}
];
