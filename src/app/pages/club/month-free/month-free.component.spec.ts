import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonthFreeComponent } from './month-free.component';

describe('MonthFreeComponent', () => {
  let component: MonthFreeComponent;
  let fixture: ComponentFixture<MonthFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthFreeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
