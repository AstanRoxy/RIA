import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.apiService.post('auth/login', credentials);
  }

  register(data: any): Observable<any> {
    return this.apiService.post('auth/register', data);
  }
}
