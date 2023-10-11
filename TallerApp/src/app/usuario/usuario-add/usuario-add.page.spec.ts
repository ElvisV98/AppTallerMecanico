import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioAddPage } from './usuario-add.page';

describe('UsuarioAddPage', () => {
  let component: UsuarioAddPage;
  let fixture: ComponentFixture<UsuarioAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
