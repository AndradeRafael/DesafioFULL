import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Title } from 'src/app/models/Title';

@Injectable({
    providedIn: 'root'
})
export class TitleFormService {

    baseUrl = `${environment.baseUrl}/api/title`;

    constructor(private http: HttpClient) { }

    post(title: Title) {
        return this.http.post(`${this.baseUrl}`, title);
    }
}
