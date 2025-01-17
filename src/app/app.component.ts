import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <h1>Welcome to the project <span>.</span></h1>
    <app-new-post-card class="card-actions" />
    <app-posts class="card-posts"></app-posts>
  `,
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-blog';
}
