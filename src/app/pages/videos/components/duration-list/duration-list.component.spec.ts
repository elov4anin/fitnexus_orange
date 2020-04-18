import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DurationListComponent } from './duration-list.component';

describe('DurationListComponent', () => {
  let component: DurationListComponent;
  let fixture: ComponentFixture<DurationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DurationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
