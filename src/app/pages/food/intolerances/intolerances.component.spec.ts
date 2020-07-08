import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntolerancesComponent } from './intolerances.component';

describe('IntolerancesComponent', () => {
  let component: IntolerancesComponent;
  let fixture: ComponentFixture<IntolerancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntolerancesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntolerancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
