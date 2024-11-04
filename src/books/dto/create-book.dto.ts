import { IsNotEmpty, IsString, IsInt, IsISBN } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsISBN()
    isbn: string;

    @IsNotEmpty()
    @IsInt()
    publishYear: number;

    reserved: boolean = false; // Alapértelmezett érték
}
