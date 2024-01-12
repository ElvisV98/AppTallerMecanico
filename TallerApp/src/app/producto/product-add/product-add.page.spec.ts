import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductAddPage } from './product-add.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddPage],
      imports: [IonicModule.forRoot(),HttpClientTestingModule]
    }).compileComponents();


    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
