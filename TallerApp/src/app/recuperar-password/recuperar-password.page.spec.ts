import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPasswordPage } from './recuperar-password.page';
import { IonicModule } from '@ionic/angular';

describe('RecuperarPasswordPage', () => {
  let component: RecuperarPasswordPage;
  let fixture: ComponentFixture<RecuperarPasswordPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarPasswordPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
