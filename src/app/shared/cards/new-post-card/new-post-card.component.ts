import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPostFormComponent } from '../../forms/new-post-form/new-post-form.component';

@Component({
  selector: 'app-new-post-card',
  standalone: false,
  templateUrl: './new-post-card.component.html',
  styleUrl: './new-post-card.component.css'
})
export class NewPostCardComponent {

  constructor(private dialog: MatDialog) {}
  
  newPost() {
    this.dialog.open(NewPostFormComponent);
  }
}
