import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KonyvtarService } from './konyvtar.service';
import { CreateKonyvtarDto } from './dto/create-konyvtar.dto';
import { UpdateKonyvtarDto } from './dto/update-konyvtar.dto';

@Controller('konyvtar')
export class KonyvtarController {
  constructor(private readonly konyvtarService: KonyvtarService) {}

  @Post()
  create(@Body() createKonyvtarDto: CreateKonyvtarDto) {
    return this.konyvtarService.create(createKonyvtarDto);
  }

  @Get()
  findAll() {
    return this.konyvtarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.konyvtarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKonyvtarDto: UpdateKonyvtarDto) {
    return this.konyvtarService.update(+id, updateKonyvtarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.konyvtarService.remove(+id);
  }
}
