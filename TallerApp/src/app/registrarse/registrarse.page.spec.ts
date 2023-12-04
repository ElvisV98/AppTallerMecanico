import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistrarsePage } from './registrarse.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

describe('RegistrarsePage', () => {
  let component: RegistrarsePage;
  let fixture: ComponentFixture<RegistrarsePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarsePage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [AuthService, NavController],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
