import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioDetailPage } from './usuario-detail.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

// Mock para ActivatedRoute
class ActivatedRouteMock {
}

describe('UsuarioDetailPage', () => {
  let component: UsuarioDetailPage;
  let fixture: ComponentFixture<UsuarioDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioDetailPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock }, // Mock para ActivatedRoute
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(UsuarioDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
