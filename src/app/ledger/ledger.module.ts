import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerRoutingModule } from './ledger-routing.module';
import { NaviComponent } from './navi/navi.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';
import { TranscationDialogComponent } from './dialogs/transcation-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NaviComponent,
    MainComponent,
    WeeklyViewComponent,
    TranscationDialogComponent,
  ],
  imports: [
    CommonModule,
    LedgerRoutingModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
  ],
  entryComponents: [
    MainComponent,
    NaviComponent,
    WeeklyViewComponent,
    TranscationDialogComponent,
  ],
})
export class LedgerModule {}
