import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';
import {FilterComponent} from '../../shared/modals/filter/filter.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-food',
    templateUrl: './food.page.html',
    styleUrls: ['./food.page.scss'],
})
export class FoodPage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.MEALS;

    constructor(private _modalController: ModalController) {
        super();
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((ionSelect) => {
            const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon').querySelector('.select-icon-inner');
            if(selectIconInner){
                selectIconInner.setAttribute('style', 'display: none !important');
            }
        });
    }

    async openFilter() {
        const modal = await this._modalController.create({
            component: FilterComponent
        });
        return await modal.present();
    }

}
