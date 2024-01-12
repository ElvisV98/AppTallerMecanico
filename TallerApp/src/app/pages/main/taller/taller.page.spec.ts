import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallerPage } from './taller.page';

describe('TallerPage', () => {
  let component: TallerPage;
  let fixture: ComponentFixture<TallerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TallerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
