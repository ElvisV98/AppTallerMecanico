import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEditPage } from './product-edit.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('ProductEditPage', () => {

  let component: ProductEditPage;
  let fixture: ComponentFixture<ProductEditPage>;

  beforeEach(async () => {

    const activatedRouteStub = { snapshot: { params: [] } };

    await TestBed.configureTestingModule({
      declarations: [ProductEditPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductEditPage);
    component = fixture.componentInstance;    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
