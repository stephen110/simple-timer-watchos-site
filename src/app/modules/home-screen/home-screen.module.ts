import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { BannerComponent } from './components/banner/banner.component';
import { SupportComponent } from './components/support/support.component';
import { PageSectionService } from '../../services/page-section.service';

@NgModule({
  declarations: [
    HomeScreenComponent,
    ToolbarComponent,
    InstructionsComponent,
    BannerComponent,
    SupportComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgOptimizedImage
  ]
})
export class HomeScreenModule { }
