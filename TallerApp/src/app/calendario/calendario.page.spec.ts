import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CalendarioPage } from './calendario.page';
import { IonicModule } from '@ionic/angular';
describe('CalendarioPage', () => {
  let component: CalendarioPage;
  let fixture: ComponentFixture<CalendarioPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [CalendarioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});