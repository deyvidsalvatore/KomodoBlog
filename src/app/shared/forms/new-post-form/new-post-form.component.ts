import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-new-post-form',
  standalone: false,
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {
  isEditMode = false;
  post: Post = {
    user: '',
    title: '',
    subtitle: '',
    postContent: '',
  };

  constructor(
    private dialogRef: MatDialogRef<any>,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.editMode$.subscribe((post) => {
      if (post) {
        this.isEditMode = true;
        this.post = { ...post };
      } else {
        this.isEditMode = false;
        this.post = {
          user: '',
          title: '',
          subtitle: '',
          postContent: '',
        };
      }
    });
  }

  publish() {
    if (this.isEditMode) {
      this.postService.updatePost(this.post).subscribe(() => {
        this.dialogRef.close();
        this.postService.showMessage('Post updated successfully', true);
      });
    } else {
      this.postService.newPost(this.post).subscribe(() => {
        this.dialogRef.close();
        this.postService.showMessage('New post added', true);
      });
    }
  }

  cancel() {
    this.postService.clearEditMode();
    this.dialogRef.close();
  }
}
