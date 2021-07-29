import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;

  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(<string>localStorage.getItem('currentUser')),
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/authenticate`, {username, password}).pipe(
      mergeMap((res) => {
        return this.http
          .get<User>(`${environment.apiUrl}/api/users/current`, {
            headers: {Authorization: `Bearer ${res.jwt}`},
          })
          .pipe(
            map((user) => {
              // eslint-disable-next-line no-param-reassign
              user.token = res.jwt;
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            }),
          );
      }),
    );
  }

  logout(): any {
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }

  // eslint-disable-next-line class-methods-use-this
  getUser(): any {
    return localStorage.getItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [{provide: AuthService, useClass: AuthService}];
