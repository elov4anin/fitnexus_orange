import { Component, OnInit } from '@angular/core';
import {ISlideInfo} from '../../../get-started/get-started.page';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  list: ISlideInfo[] = [
    {
      title: "Cardio",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Core",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Dance",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Martial Arts",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Strength",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Mind & Body",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Hiit",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Target Zone",
      imgSrc: "/assets/images/category.png"
    },
    {
      title: "Other",
      imgSrc: "/assets/images/category.png"
    },
  ];

  constructor(private _router: Router) { }

  ngOnInit() {}

  redirectTo() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY])
  }
}
