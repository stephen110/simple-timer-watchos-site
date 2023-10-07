import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { InstructionsComponent } from './components/instructions/instructions.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    ToolbarComponent,
    InstructionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgOptimizedImage
  ]
})
export class HomeScreenModule { }
