import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchQuery } from '../shared/models/search.model';
import { IUniversity } from '../shared/models/univercity.model';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  public getUniversities(params: ISearchQuery): Observable<IUniversity[]>{
    return this.http.get<IUniversity[]>(`http://universities.hipolabs.com/search?${params.searchedUniversity ? 'name=' + params.searchedUniversity + '&': '' }country=${params.searchedCountry}`);
  }

}
