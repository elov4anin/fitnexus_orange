import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from '@ionic/angular';
import {ModalSpinClassComponent} from '../../modals/modal-spin-class/modal-spin-class.component';

@Component({
  selector: 'app-event-scheduler',
  templateUrl: './event-scheduler.component.html',
  styleUrls: ['./event-scheduler.component.scss'],
})
/**
 * @deprecated
 */
export class EventSchedulerComponent implements OnInit {
  @Input() type: 'info' | 'cancel' = 'cancel';

  constructor(private _router: Router, private _modalController: ModalController) { }

  ngOnInit() {}

  async onClick() {
    const modal = await this._modalController.create({
      component: ModalSpinClassComponent,
      cssClass: 'modal-spin-class'
    });
    return await modal.present();
  }
}
