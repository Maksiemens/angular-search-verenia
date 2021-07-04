import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  loadRepositories(query: string): Observable<any[]> {
    return this.http.get<any>(
      `${environment.primaryApiUrl}/search/repositories`,
      {
        params: { q: query },
      },
    );
  }
}
