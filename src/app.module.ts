import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KonyvtarModule } from './konyvtar/konyvtar.module';

@Module({
  imports: [KonyvtarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
