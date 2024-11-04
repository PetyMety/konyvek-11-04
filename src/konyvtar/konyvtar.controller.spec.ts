import { Test, TestingModule } from '@nestjs/testing';
import { KonyvtarController } from './konyvtar.controller';
import { KonyvtarService } from './konyvtar.service';

describe('KonyvtarController', () => {
  let controller: KonyvtarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonyvtarController],
      providers: [KonyvtarService],
    }).compile();

    controller = module.get<KonyvtarController>(KonyvtarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
