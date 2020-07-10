import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListClubNewsPage } from './list-club-news.page';

describe('ListClubNewsPage', () => {
  let component: ListClubNewsPage;
  let fixture: ComponentFixture<ListClubNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClubNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListClubNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
