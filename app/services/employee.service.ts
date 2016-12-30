import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl = "http://5866026eef5bf11200a6d68b.mockapi.io/api/employees";

    constructor(private _http:Http){

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((respone: Response)=> respone.json());
    }
}