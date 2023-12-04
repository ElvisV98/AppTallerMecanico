import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosPage } from './usuarios.page';
import { IonicModule } from '@ionic/angular';

describe('UsuariosPage', () => {
  let component: UsuariosPage;
  let fixture: ComponentFixture<UsuariosPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
