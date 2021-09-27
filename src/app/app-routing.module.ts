import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./map-app/first-page/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'map', loadChildren: () => import('./map-app/second-page/map-app.module').then(mod => mod.MapAppModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
