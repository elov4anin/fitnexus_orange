import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping} from '../../../shared/enums/pages.enum';

@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.page.html',
    styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.CHALLENGE;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    connectDevice() {

    }

    joinChallenge() {

    }
}
