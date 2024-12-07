import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../../shared/models/Post';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public baseUrl: string = 'https://labdioblogangular.onrender.com/posts';

  private editModeSource = new BehaviorSubject<Post | null>(null);
  editMode$ = this.editModeSource.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  setEditMode(post: Post) {
    this.editModeSource.next(post);
  }

  clearEditMode() {
    this.editModeSource.next(null);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  newPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  deletePost(id: string): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Post>(url);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/${post.id}`;
    return this.http.put<Post>(url, post);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'close', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-success'] : ['msg-error'],
    });
  }
}
