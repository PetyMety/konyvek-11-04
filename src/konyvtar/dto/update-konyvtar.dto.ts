import { PartialType } from '@nestjs/mapped-types';
import { CreateKonyvtarDto } from './create-konyvtar.dto';

export class UpdateKonyvtarDto extends PartialType(CreateKonyvtarDto) {}
