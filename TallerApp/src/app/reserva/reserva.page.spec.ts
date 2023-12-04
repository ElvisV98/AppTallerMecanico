import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaPage } from './reserva.page';
import { IonicModule } from '@ionic/angular';

describe('ReservaPage', () => {
  let component: ReservaPage;
  let fixture: ComponentFixture<ReservaPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ReservaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
