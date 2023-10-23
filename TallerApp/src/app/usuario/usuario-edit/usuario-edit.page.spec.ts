import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioEditPage } from './usuario-edit.page';

describe('UsuarioEditPage', () => {
  let component: UsuarioEditPage;
  let fixture: ComponentFixture<UsuarioEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
