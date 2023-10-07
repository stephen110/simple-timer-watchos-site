import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeScreenModule } from './modules/home-screen/home-screen.module';
import { HomeScreenComponent } from './modules/home-screen/components/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: ':section',
    component: HomeScreenComponent,
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeScreenModule,
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
