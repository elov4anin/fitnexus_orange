import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferralPage } from './referral-page.component';

describe('ReferalPage', () => {
  let component: ReferralPage;
  let fixture: ComponentFixture<ReferralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
