// Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioEditPage } from './usuario-edit.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('UsuarioEditPage', () => {

  let component: UsuarioEditPage;
  let fixture: ComponentFixture<UsuarioEditPage>;

  beforeEach(async () => {

    // Configuramos el stub
    const activatedRouteStub = { snapshot: { params: [] } };

    await TestBed.configureTestingModule({
      declarations: [UsuarioEditPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioEditPage);
    component = fixture.componentInstance;    

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});