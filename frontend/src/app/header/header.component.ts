import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { JWTTokenService } from 'src/app/auth/jwttoken.service';
import { LocalStorageService } from '../auth/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showHeader = true;
  constructor(
    private jwtTokenService: JWTTokenService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.modifyHeader(event);
      });
  }

  get username() {
    return this.jwtTokenService.getUser();
  }

  onClickSignOut() {
    this.localStorageService.remove('token');
    this.router.navigateByUrl('/');
  }

  modifyHeader(location) {
    if (location.url === '/') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
