import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../../shared/models/Post';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:3001/posts';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).pipe(take(1));
  }

  newPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post).pipe(take(1));
  }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'close', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
}
