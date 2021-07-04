import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepositoryResponse } from '@app/shared/models/repository-response.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  loadRepositories(search: any): Observable<RepositoryResponse> {
    return this.http.get<RepositoryResponse>(
      `${environment.primaryApiUrl}/search/repositories`,
      {
        params: { q: search.query },
      },
    );
  }
}
