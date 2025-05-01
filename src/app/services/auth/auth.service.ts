import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('signedUsers') ?? '[]');
    const userFound = users.find((user: User) => {
      if (user.nome === username && user.password === password) {
        return true;
      }
      return false;
    });
    if (userFound) {
      localStorage.setItem('token', 'fake-jwt-token');
      localStorage.setItem('user', JSON.stringify(userFound));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUsername(): string {
    const userLogged = JSON.parse(localStorage.getItem('user') ?? 'null');
    const username = userLogged.nome;
    return username;
  }
}
