import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transcation-dialog',
  template: `
    <h1 mat-dialog-title>Transcation</h1>
    <div mat-dialog-content>
      <!-- <p>Please add description for the transcation:</p> -->
      <mat-form-field>
        <input
          placeholder="description"
          matInput
          [(ngModel)]="data.ledger.description"
        />
      </mat-form-field>
      <mat-form-field>
        <input placeholder="Cost" matInput [(ngModel)]="data.ledger.ori_cost" />
      </mat-form-field>
      <mat-form-field>
        <input
          placeholder="Currency"
          matInput
          [(ngModel)]="data.ledger.currency"
        />
      </mat-form-field>
      <label></label>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>
        Submit
      </button>
    </div>
  `,
  styles: [],
})
export class TranscationDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<TranscationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
