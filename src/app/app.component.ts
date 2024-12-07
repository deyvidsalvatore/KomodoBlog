import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <app-new-post-card class="" />
    <router-outlet />
  `,
  standalone: false,
  styles: []
})
export class AppComponent {
  title = 'personal-blog';
}
