import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeScreenModule } from './modules/home-screen/home-screen.module';
import { HomeScreenComponent } from './modules/home-screen/components/home-screen/home-screen.component';
import { PrivacyComponent } from './modules/privacy/components/privacy/privacy.component';
import { PrivacyModule } from './modules/privacy/privacy.module';

const routes: Routes = [
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
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
    PrivacyModule,
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
