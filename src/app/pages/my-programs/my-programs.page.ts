import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-my-programs',
    templateUrl: './my-programs.page.html',
    styleUrls: ['./my-programs.page.scss'],
})
export class MyProgramsPage extends PageBaseComponent implements OnInit {
    pageTitle: string =  PagesEnum2NamesMapping.MY_PROGRAMMES;

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    start():void {
        this._router.navigate(["/" , PagesEnum2RoutingMapping.NEW_PROGRAMME])
    }
}
