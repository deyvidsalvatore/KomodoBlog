import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-new-post-form',
  standalone: false,
  templateUrl: './new-post-form.component.html',
  styleUrl: './new-post-form.component.css'
})
export class NewPostFormComponent {
  disabled = true;
  post: Post = {
    user: '',
    title: '',
    subtitle: '',
    postContent: '',
  };

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,
    private postService: PostService
  ) {}

  publish() {
    this.postService.newPost(this.post).subscribe(() => {
      this.dialog.closeAll();
      this.postService.showMessage('New post added', true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
  }

  cancel() {
    if (this.post.postContent != "") {
      this.dialog.open(NewPostFormComponent);
    } else {
      this.dialogRef.close();
    }
  }
}
