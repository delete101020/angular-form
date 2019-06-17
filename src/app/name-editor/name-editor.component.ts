import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  name = new FormControl('');

  constructor(public dialog: MatDialog) { }

  updateName() {
    this.name.setValue('Pun Chibi');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: 'Are you sure ?'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
