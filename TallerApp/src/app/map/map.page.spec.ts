import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPage } from './map.page';
import { IonicModule } from '@ionic/angular';
import { map } from 'rxjs';

// map.page.spec.ts

describe('MapPage', () => {

  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;
    
  beforeEach(async () => {

    // Mock de google maps
    const googleStub = {
      maps: {
        Map: class { },
        event: {  
          addListenerOnce: (map: any, eventName: any, callback: () => void) => {
            callback();
          }
        }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [MapPage],
      imports: [IonicModule.forRoot()],
      providers: [ 
        { provide: 'google', useValue: googleStub }  
      ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPage);
    component = fixture.componentInstance;  
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
  
});