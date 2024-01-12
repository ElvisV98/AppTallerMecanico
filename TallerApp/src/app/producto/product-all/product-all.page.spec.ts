import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductAllPage } from './product-all.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductAllPage', () => {
  let component: ProductAllPage;
  let fixture: ComponentFixture<ProductAllPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ProductAllPage],
      imports: [IonicModule.forRoot(),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
