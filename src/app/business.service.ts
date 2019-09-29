import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BusinessService {
    uri = 'http://localhost:3000/business';

    constructor(private http: HttpClient) {}

    getBusinesses() {
        return this.http.get(`${this.uri}`);
    }

    delete(id) {
        return this
                  .http
                  .get(`${this.uri}/delete/${id}`);
    }

    edit(id) {
        return this
                  .http
                  .get(`${this.uri}/detail/${id}`);
    }

}
