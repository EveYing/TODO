import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationDialogComponent } from './transcation-dialog.component';

describe('TranscationDialogComponent', () => {
  let component: TranscationDialogComponent;
  let fixture: ComponentFixture<TranscationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
