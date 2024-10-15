import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private token: string;

  constructor() {
    this.token = localStorage.getItem('token') || '';
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }


}
