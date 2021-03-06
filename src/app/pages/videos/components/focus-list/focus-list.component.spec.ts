import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FocusListComponent } from './focus-list.component';

describe('FocusListComponent', () => {
  let component: FocusListComponent;
  let fixture: ComponentFixture<FocusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FocusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
