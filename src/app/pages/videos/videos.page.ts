import {Component, OnInit, ViewChild} from '@angular/core';
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';
import {Router} from '@angular/router';
import {FilterComponent} from '../../shared/modals/filter/filter.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.page.html',
    styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.VIDEOS;



    constructor(private _router: Router, private _modalController: ModalController) {
    }

    ngOnInit() {
    }

    redirectTo() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY])
    }

    async openFilter() {
        const modal = await this._modalController.create({
            component: FilterComponent
        });
        return await modal.present();
    }
}
