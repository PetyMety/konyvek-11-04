import { Injectable } from '@nestjs/common';
import { CreateKonyvtarDto } from './dto/create-konyvtar.dto';
import { UpdateKonyvtarDto } from './dto/update-konyvtar.dto';

@Injectable()
export class KonyvtarService {
  create(createKonyvtarDto: CreateKonyvtarDto) {
    return 'This action adds a new konyvtar';
  }

  findAll() {
    return `This action returns all konyvtar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} konyvtar`;
  }

  update(id: number, updateKonyvtarDto: UpdateKonyvtarDto) {
    return `This action updates a #${id} konyvtar`;
  }

  remove(id: number) {
    return `This action removes a #${id} konyvtar`;
  }
}
