import { Test, TestingModule } from '@nestjs/testing';
import { KonyvtarService } from './konyvtar.service';

describe('KonyvtarService', () => {
  let service: KonyvtarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonyvtarService],
    }).compile();

    service = module.get<KonyvtarService>(KonyvtarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
