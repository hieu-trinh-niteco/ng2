import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'employee-overview-component',
    template: `
    <h3>This is overview employee</h3>
    `
})

export class EmployeeOverviewComponent implements OnInit, OnDestroy{
    public parentRouterId: number;
    public sub:Subscription;
    constructor(private router:Router, private activatedRoute: ActivatedRoute){

    }

    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params=>{
            this.parentRouterId = params['id'];
            console.log(this.parentRouterId)
        })
    }

    ngOnDestroy(){

    }
}