import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserScore } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl: string = 'https://localhost:44303/api/game/';

  constructor(private http: HttpClient) { }

  SaveUserScore(user: User): Observable<UserScore[]> {
    const url = this.baseUrl + 'saveUserScore/';
    return this.http.post(url, user) as Observable<UserScore[]>;
  }



}

