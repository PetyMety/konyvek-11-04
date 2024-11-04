import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KonyvtarModule } from './konyvtar/konyvtar.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [KonyvtarModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
