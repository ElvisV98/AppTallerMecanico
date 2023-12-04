import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPage } from './map.page';
import { IonicModule } from '@ionic/angular';
import { map } from 'rxjs';

describe('MapPage', () => {
  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [MapPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();


    fixture = TestBed.createComponent(MapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
