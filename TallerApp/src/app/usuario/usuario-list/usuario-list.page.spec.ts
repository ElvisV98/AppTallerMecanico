import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioListPage } from './usuario-list.page';

describe('UsuarioListPage', () => {
  let component: UsuarioListPage;
  let fixture: ComponentFixture<UsuarioListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
