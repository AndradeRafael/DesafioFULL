import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Title } from 'src/app/models/Title';

@Injectable({
    providedIn: 'root'
})
export class TitleListService {

    baseUrl = `${environment.baseUrl}/api/title`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Title[]> {
        return this.http.get<Title[]>(`${this.baseUrl}`);
    }
}
