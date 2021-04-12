import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranscationDialogComponent } from '../dialogs/transcation-dialog.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss'],
})
export class NaviComponent implements OnInit {
  ledger: any = {};
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openTranscationDialog(): void {
    const dialogRef = this.dialog.open(TranscationDialogComponent, {
      width: '400px',
      data: { ledger: this.ledger },
    });
  }
}
