import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.booksService.findOne(id);
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateBookDto: Partial<CreateBookDto>) {
        return this.booksService.update(id, updateBookDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.booksService.remove(id);
        return { statusCode: 204, message: 'No Content' };
    }
}
