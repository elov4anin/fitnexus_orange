import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ISlideInfo} from '../../get-started/get-started.page';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../shared/enums/pages.enum';

@Component({
    selector: 'app-club-news',
    templateUrl: './club-news.component.html',
    styleUrls: ['./club-news.component.scss'],
})
export class ClubNewsComponent implements OnInit {
    @ViewChild('slider', {static: false}) sliderRef: IonSlides;
    slideOpts = {
        initialSlide: 0,
        speed: 400,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        width: 287
    };
    sliders: ISlideInfo[] = [
        {
            title: "Get Fit Friday: HIIT Workout",
            imgSrc: "/assets/images/club/1c34d74f0fa58956605c31539e3d0c91@2x.png",
            text: "HIIT stands for high-intensity interval training. It's a great way to burn calories..."
        },
        {
            title: "Trainers say this is common",
            imgSrc: "/assets/images/club/2e08e0576c2a4ec22dded809a85f45f3@2x.png",
            text: "Take on this challenging homee workout. Gerren Liles hosts a fat-burning"
        },
        {
            title: "Get Fit Friday: HIIT Workout",
            imgSrc: "/assets/images/club/1c34d74f0fa58956605c31539e3d0c91@2x.png",
            text: "HIIT stands for high-intensity interval training. It's a great way to burn calories..."
        },
        {
            title: "Trainers say this is common",
            imgSrc: "/assets/images/club/2e08e0576c2a4ec22dded809a85f45f3@2x.png",
            text: "Take on this challenging homee workout. Gerren Liles hosts a fat-burning"
        }, {
            title: "Get Fit Friday: HIIT Workout",
            imgSrc: "/assets/images/club/1c34d74f0fa58956605c31539e3d0c91@2x.png",
            text: "HIIT stands for high-intensity interval training. It's a great way to burn calories..."
        },
        {
            title: "Trainers say this is common",
            imgSrc: "/assets/images/club/2e08e0576c2a4ec22dded809a85f45f3@2x.png",
            text: "Take on this challenging homee workout. Gerren Liles hosts a fat-burning"
        },
    ];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    openSlide() {
        // this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.VIDEO_ITEM])
    }

}
