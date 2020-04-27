import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-welcome-programmes',
    templateUrl: './welcome-programmes.page.html',
    styleUrls: ['./welcome-programmes.page.scss'],
})
export class WelcomeProgrammesPage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.WELCOME_PROGRAMMES;

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    addNewProgram() {
        this._router.navigate(["/training"])
    }

    openProgramLibrary() {
        this._router.navigate(["/", PagesEnum2RoutingMapping.LIBRARY_PROGRAMMES])

    }
}
