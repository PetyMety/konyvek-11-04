import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
    private books = [];
    private nextId = 1;

    findAll() {
        return this.books;
    }

    findOne(id: number) {
        return this.books.find(book => book.id === id);
    }

    create(createBookDto: CreateBookDto) {
        const newBook = {
            id: this.nextId++,
            ...createBookDto,
        };
        this.books.push(newBook);
        return newBook;
    }

    delete(id: number) {
        this.books = this.books.filter(book => book.id !== id);
    }

    update(id: number, updateBookDto: Partial<CreateBookDto>) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex > -1) {
            this.books[bookIndex] = { ...this.books[bookIndex], ...updateBookDto };
            return this.books[bookIndex];
        }
        return null;
    }
}
