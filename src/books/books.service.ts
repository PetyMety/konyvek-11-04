import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
    private books = [];
    private nextId = 1;

    constructor() {
        // Példa könyvek 
        this.books.push({
            id: this.nextId++,
            title: 'A Gyűrűk Ura',
            author: 'J.R.R. Tolkien',
            isbn: '978-963-08-1234-5',
            publishYear: 1954,
            reserved: false,
        });

        this.books.push({
            id: this.nextId++,
            title: '1984',
            author: 'George Orwell',
            isbn: '978-963-08-5678-9',
            publishYear: 1949,
            reserved: false,
        });

        this.books.push({
            id: this.nextId++,
            title: 'A Szél neve',
            author: 'Patrick Rothfuss',
            isbn: '978-963-08-9876-5',
            publishYear: 2007,
            reserved: false,
        });
    }

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
