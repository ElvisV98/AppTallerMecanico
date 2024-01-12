import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalizacionPage } from './localizacion.page';
import { IonicModule } from '@ionic/angular';

describe('LocalizacionPage', () => {
  let component: LocalizacionPage;
  let fixture: ComponentFixture<LocalizacionPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [LocalizacionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    
    fixture = TestBed.createComponent(LocalizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
