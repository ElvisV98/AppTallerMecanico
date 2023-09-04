import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarsePage } from './registrarse.page';

describe('RegistrarsePage', () => {
  let component: RegistrarsePage;
  let fixture: ComponentFixture<RegistrarsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
