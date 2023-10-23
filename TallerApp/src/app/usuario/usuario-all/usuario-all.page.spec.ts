import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioAllPage } from './usuario-all.page';

describe('UsuarioAllPage', () => {
  let component: UsuarioAllPage;
  let fixture: ComponentFixture<UsuarioAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
