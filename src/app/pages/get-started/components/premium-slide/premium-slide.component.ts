import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';

@Component({
    selector: 'app-premium-slide',
    templateUrl: './premium-slide.component.html',
    styleUrls: ['./premium-slide.component.scss'],
})
export class PremiumSlideComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    openPage() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS])

    }
}
