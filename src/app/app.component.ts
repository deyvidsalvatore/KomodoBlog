import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <router-outlet />
  `,
  standalone: false,
  styles: []
})
export class AppComponent {
  title = 'personal-blog';
}
