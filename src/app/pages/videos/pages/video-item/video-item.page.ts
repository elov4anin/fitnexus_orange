import { Component, OnInit } from '@angular/core';
import {PagesEnum2NamesMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.page.html',
  styleUrls: ['./video-item.page.scss'],
})
export class VideoItemPage implements OnInit {
    title: string = PagesEnum2NamesMapping.VIDEO_ITEM;
    isHeartClicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
