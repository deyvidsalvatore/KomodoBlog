import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:3001/posts';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  getPosts() {
    return this.http.get(this.baseUrl);
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
