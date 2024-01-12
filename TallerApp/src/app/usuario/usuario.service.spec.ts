import { TestBed } from '@angular/core/testing';
import { UsuarioServiceService } from './usuario.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo HttpClientTestingModule

describe('UsuarioService', () => {
  let service: UsuarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Agrega el módulo HttpClientTestingModule a los imports
      providers: [UsuarioServiceService],
    });
    service = TestBed.inject(UsuarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Resto de las pruebas...

});
