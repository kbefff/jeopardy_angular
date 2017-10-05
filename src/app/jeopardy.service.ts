import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class JeopardyService {

  private baseUrl: 
    string = "http://jservice.io/api/random";

  constructor(private http: Http) { }

  getQuestionInfo(): Observable<any> {

    return this.http.get(this.baseUrl)
      .map(result => {
        return result.json()
      })

  }
}