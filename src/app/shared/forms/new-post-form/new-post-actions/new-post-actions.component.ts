import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../../../core/services/post.service';

@Component({
  selector: 'app-new-post-actions',
  standalone: false,
  templateUrl: './new-post-actions.component.html',
  styleUrl: './new-post-actions.component.css'
})
export class NewPostActionsComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostActionsComponent>,
    private postService: PostService
  ) {}

  discard() {
    this.dialog.closeAll();
    this.postService.showMessage("Changes discard!", false);
  }

  back() {
    this.dialogRef.close();
  }
}
