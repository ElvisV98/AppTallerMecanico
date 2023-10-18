import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectUsuarioPage } from './select-usuario.page';

describe('SelectUsuarioPage', () => {
  let component: SelectUsuarioPage;
  let fixture: ComponentFixture<SelectUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
