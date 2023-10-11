import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioDetailPage } from './usuario-detail.page';

describe('UsuarioDetailPage', () => {
  let component: UsuarioDetailPage;
  let fixture: ComponentFixture<UsuarioDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
