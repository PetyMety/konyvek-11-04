import { Module } from '@nestjs/common';
import { KonyvtarService } from './konyvtar.service';
import { KonyvtarController } from './konyvtar.controller';

@Module({
  controllers: [KonyvtarController],
  providers: [KonyvtarService],
})
export class KonyvtarModule {}
