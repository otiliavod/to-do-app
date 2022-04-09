import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeader = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.modifyHeader(event);
      });
  }

  modifyHeader(location) {
    if (location.url === '/' || location.url === '/signup') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
