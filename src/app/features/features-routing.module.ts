import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
    { path: 'home',component:HomeComponent },
    { path: '**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
