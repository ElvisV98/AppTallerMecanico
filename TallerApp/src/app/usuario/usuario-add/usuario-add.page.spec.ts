import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioAddPage } from './usuario-add.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioAddPage', () => {
  let component: UsuarioAddPage;
  let fixture: ComponentFixture<UsuarioAddPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioAddPage],
      imports: [IonicModule.forRoot(),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
