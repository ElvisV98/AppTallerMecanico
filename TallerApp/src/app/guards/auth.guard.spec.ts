import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()], // Agrega esta línea para configurar IonicStorageModule
      providers: [AuthGuard],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
