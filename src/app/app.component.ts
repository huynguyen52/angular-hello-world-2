import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  layoutComponent: any;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.root.firstChild;

        if (currentRoute && currentRoute.snapshot.data['layout']) {
          this.layoutComponent = currentRoute.snapshot.data['layout'];
        } else {
          this.layoutComponent = null;
        }
      }
    });
  }
}
