import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialOffersPage } from './special-offers.page';

describe('SpecialOffersPage', () => {
  let component: SpecialOffersPage;
  let fixture: ComponentFixture<SpecialOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
