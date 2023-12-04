import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectUsuarioPage } from './select-usuario.page';
import { IonicModule } from '@ionic/angular';

describe('SelectUsuarioPage', () => {
  let component: SelectUsuarioPage;
  let fixture: ComponentFixture<SelectUsuarioPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [SelectUsuarioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
