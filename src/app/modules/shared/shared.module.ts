import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
