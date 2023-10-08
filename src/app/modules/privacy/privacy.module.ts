import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PrivacyModule { }
