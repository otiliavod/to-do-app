import { Component } from '@angular/core';
import { JWTTokenService } from 'src/app/auth/jwttoken.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private jwtTokenService: JWTTokenService) {}

  get username() {
    return this.jwtTokenService.getUser();
  }
}
