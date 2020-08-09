import { TestBed } from '@angular/core/testing';

import { TareasDataService } from './tareas-data.service';

describe('TareasDataService', () => {
  let service: TareasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
