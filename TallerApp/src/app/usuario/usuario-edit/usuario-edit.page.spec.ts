import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioEditPage } from './usuario-edit.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioEditPage', () => {
  let component: UsuarioEditPage;
  let fixture: ComponentFixture<UsuarioEditPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioEditPage],
      imports: [IonicModule.forRoot(),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
