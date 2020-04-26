import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeforeAfterListPhotoPage } from './before-after-list-photo.page';

describe('BeforeAfterListPhotoPage', () => {
  let component: BeforeAfterListPhotoPage;
  let fixture: ComponentFixture<BeforeAfterListPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeAfterListPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeAfterListPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
