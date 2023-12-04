import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioListPage } from './usuario-list.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioListPage', () => {
  let component: UsuarioListPage;
  let fixture: ComponentFixture<UsuarioListPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioListPage],
      imports: [IonicModule.forRoot(),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
