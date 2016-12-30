import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Tran Quang Canh" },
            { Id: 2, Name: "Nguyen Thi Hau" },
            { Id: 3, Name: "Do Van Hai =)" },
            { Id: 4, Name: "Trinh Thang Binh" },
            { Id: 5, Name: "Tang Tien Vit" },
        ];
        return employees;
    }
}