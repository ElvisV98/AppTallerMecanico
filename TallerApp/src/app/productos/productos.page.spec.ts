import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosPage } from './productos.page';
import { IonicModule } from '@ionic/angular';

describe('ProductosPage', () => {
  let component: ProductosPage;
  let fixture: ComponentFixture<ProductosPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ProductosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
