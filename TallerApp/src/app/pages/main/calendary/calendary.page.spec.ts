import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendaryPage } from './calendary.page';

describe('CalendaryPage', () => {
  let component: CalendaryPage;
  let fixture: ComponentFixture<CalendaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
