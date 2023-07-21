import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(public httpClient: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  public post<T>(url: string, request: any) {
    return this.httpClient.post<T>(url, request);
  }
}
