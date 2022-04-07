import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JWTTokenService {
  jwtToken: string;
  decodedToken: { [key: string]: string };

  constructor(private localStorageService: LocalStorageService) {
    let token = this.localStorageService.get('token');
    if (token) {
      this.decodedToken = jwt_decode(this.localStorageService.get('token'));
    }
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwtToken);
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['sub'] : null;
  }

  getUserId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['userId'] : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    const expiryTime = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * parseInt(expiryTime) - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}
