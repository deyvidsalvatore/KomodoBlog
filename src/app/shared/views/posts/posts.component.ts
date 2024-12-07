import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { MatDialog } from '@angular/material/dialog';
import { NewPostFormComponent } from '../../forms/new-post-form/new-post-form.component';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(
    private postService: PostService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((post) => {
      this.posts = post;
    });
  }

  delete(post: Post) {
    this.postService.deletePost(`${post.id}`).subscribe(() => {
      this.postService.showMessage('Post deleted!', true);
      this.ngOnInit();
    });
  }

  update(post: Post) {
    this.postService.setEditMode(post);

    const dialogRef = this.dialog.open(NewPostFormComponent);
    dialogRef.afterClosed().subscribe(() => this.postService.clearEditMode());
  }
}
