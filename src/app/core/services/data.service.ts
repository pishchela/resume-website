import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Resume } from "../models/resume.model";
import { environment } from './../../../environments/environment';

@Injectable()
export class DataService {
  constructor(private _httpClient: HttpClient) {
  }

  public getResumeData(): Observable<Resume> {
    return this._httpClient.get<Resume>(environment.resumeUrl);
  }
}
