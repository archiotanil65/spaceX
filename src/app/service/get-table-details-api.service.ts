import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; /*for api calling*/

@Injectable({
  providedIn: 'root'
})
export class GetTableDetailsApiService {

  constructor(private http:HttpClient) { }

  callMainTableApi()
  {
    return this.http.get('https://api.spacexdata.com/v3/launches');
  }
}
