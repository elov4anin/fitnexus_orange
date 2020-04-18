import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../../shared/enums/pages.enum';
import {Router} from '@angular/router';

@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.page.html',
    styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.CHALLENGE;

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    connectDevice() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.ADD_DEVICE])

    }

    joinChallenge() {

    }
}
