import {Component, OnInit, ViewChild} from '@angular/core';
import {PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';
import {Router} from '@angular/router';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.page.html',
    styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {



    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    redirectTo() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY])
    }
}
