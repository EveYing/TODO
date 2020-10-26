import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { BoardDialogComponent } from '../dialogs/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: Board[];
  sub: Subscription;

  constructor(public boardService: BoardService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.sub = this.boardService.getUserBoards().subscribe((boards) => {
      this.boards = boards;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  openBoardDialog(board?: Board, idx?: number): void {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      data: board
        ? { board: { ...board }, isNew: false, idx }
        : { board: {}, isNew: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      if (result.isNew) {
        this.boardService.createBoard({
          title: result.board.title,
          priority: this.boards.length,
        });
      } else {
        // Update board according to result.board
        this.boardService.updateBoardTitle(result.board.id, result.board.title);
      }
    });
  }
}
