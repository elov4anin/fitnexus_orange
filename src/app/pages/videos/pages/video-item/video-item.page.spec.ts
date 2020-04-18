import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoItemPage } from './video-item.page';

describe('VideoItemPage', () => {
  let component: VideoItemPage;
  let fixture: ComponentFixture<VideoItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
