import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // declare your path, and the component it's redirecting to
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'object', component: ObjectComponent }
  // colon indicates the :id is a placeholder for specific hero id
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'array', component: HeroesComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }