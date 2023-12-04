import { TestBed } from '@angular/core/testing';
import { ProductServiceService } from './product-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo HttpClientTestingModule

describe('ProductServiceService', () => {
  let service: ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Agrega el módulo HttpClientTestingModule a los imports
      providers: [ProductServiceService],
    });
    service = TestBed.inject(ProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Resto de las pruebas...

});

