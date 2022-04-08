import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTTokenService } from 'src/app/auth/jwttoken.service';
import { LocalStorageService } from '../auth/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private jwtTokenService: JWTTokenService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {}

  get username() {
    return this.jwtTokenService.getUser();
  }

  onClickSignOut() {
    this.localStorageService.remove('token');
    this.router.navigateByUrl('/');
  }
}
