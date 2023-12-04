import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './auth.service';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, Storage],
      imports: [IonicStorageModule.forRoot()],
    });
    service = TestBed.inject(AuthService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
