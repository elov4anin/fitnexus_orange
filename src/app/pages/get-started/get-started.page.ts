import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.page.html',
    styleUrls: ['./get-started.page.scss'],
})
export class GetStartedPage implements OnInit {
    pageTitle: string = 'Welcome to fitnexus';
    @ViewChild('slider', {static: false}) slider: IonSlides;
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    path: string = '/assets/images/';

    slides: ISlideInfo[] = [
        {
            title: 'Pick a profile photo',
            text: 'Tap to upload your profile picture',
            isPhotoSlide: true
        },
        {
            title: 'On-demand Workouts',
            text: 'Access our extensive library of over 1000 online video classes to do at home, including; yoga, Pilates, strength, cardio, abs, HIIT classes plus many more and create your own weekly schedule of classes to do anywhere at any time. New classes added every month!',
            srcset: {
                x1: this.path + 'workout-slide.png',
                x2: this.path + 'workout-slide@2x.png',
                x3: this.path + 'workout-slide@3x.png'
            }
        },
        {
            title: 'Workout Plans',
            text: 'Pick from 1000\'s readymade workouts, for the gym or at home, created by fully qualified personal trainers from across the globe. Create your own workouts, connect fitness trackers or fitness apps and track your progress.',
            srcset: {
                x1: this.path + 'workout-plans-slide.png',
                x2: this.path + 'workout-plans-slide@2x.png',
                x3: this.path + 'workout-plans-slide@3x.png'
            }
        },
        {
            title: 'food',
            text: 'Choose from over 250,000 healthy recipes in our library, all with cooking instructions and nutritional information, then add them to your very own meal planner that calculates your daily and weekly nutrition for you. New recipes added daily!',
            srcset: {
                x1: this.path + 'food-slide.png',
                x2: this.path + 'food-slide@2x.png',
                x3: this.path + 'food-slide@3x.png'
            }
        },
        {
            title: 'Challenges',
            text: 'Need help keeping yourself motivated? Our monthly fitness challenges are a great way to keep in shape whilst working towards your goals, simply pick the challenge you like, add yourself and the app keeps track of your progress towards the goal. New challenges every month!',
            srcset: {
                x1: this.path + 'challenges-slide.png',
                x2: this.path + 'challenges-slide@2x.png',
                x3: this.path + 'challenges-slide@3x.png'
            }
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    nextSlide() {
        this.slider.slideNext()
    }
}

export interface ISlideInfo {
    title?: string;
    text?: string;
    imgSrc?: string;
    srcset?: any;
    icon?: string;
    isPhotoSlide?: boolean
}
