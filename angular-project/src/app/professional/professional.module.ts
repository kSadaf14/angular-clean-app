import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';

@NgModule({
  declarations: [
    ProfessionalDashboardComponent
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class ProfessionalModule { }
