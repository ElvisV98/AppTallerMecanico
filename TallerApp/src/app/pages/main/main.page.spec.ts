import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD:TallerApp/src/app/pages/main/main.page.spec.ts
import { MainPage } from './main.page';
=======
import { UsuariosPage } from './usuarios.page';
import { IonicModule } from '@ionic/angular';
>>>>>>> master:TallerApp/src/app/usuarios/usuarios.page.spec.ts

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

<<<<<<< HEAD:TallerApp/src/app/pages/main/main.page.spec.ts
  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainPage);
=======
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosPage);
>>>>>>> master:TallerApp/src/app/usuarios/usuarios.page.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
