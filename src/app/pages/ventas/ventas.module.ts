import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './explorer/explorer.component';
import { ListingComponent } from './listing/listing.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [ExplorerComponent, ListingComponent, ResumeComponent],
  imports: [CommonModule],
  exports: [ExplorerComponent, ListingComponent, ResumeComponent],
})
export class VentasModule {}
