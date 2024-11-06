import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { NotFoundException
  
 } from '@nestjs/common';

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  publishYear: number;
  reserved: boolean;
}

@Injectable()
export class BooksService {
  private books: Book[] = [];
    private nextId = 1;

    constructor() {
        // Példa könyvek 
        this.books.push({
            id: this.nextId++,
            title: 'A Gyűrűk Ura',
            author: 'J.R.R. Tolkien',
            isbn: '978-0-061-96436-7',
            publishYear: 1954,
            reserved: false,
        });

        this.books.push({
            id: this.nextId++,
            title: '1984',
            author: 'George Orwell',
            isbn: '978-0-061-96436-7',
            publishYear: 1949,
            reserved: false,
        });

        this.books.push({
            id: this.nextId++,
            title: 'A Szél neve',
            author: 'Patrick Rothfuss',
            isbn: '978-0-061-96436-7',
            publishYear: 2007,
            reserved: false,
        });
    }

    findAll(): Book[] {
      return this.books;
  }

  findOne(id: number): Book {
      const book = this.books.find(b => b.id == id);
      if (!book) {
          throw new NotFoundException(`Book with ID ${id} not found`);
      }
      return book;
  }

  create(createBookDto: CreateBookDto): Book {
      const newBook: Book = {
          id: this.nextId++,
          ...createBookDto,
      };
      this.books.push(newBook);
      return newBook;
  }

  update(id: number, updateBookDto: Partial<CreateBookDto>): Book {
      const book = this.findOne(id);
      Object.assign(book, updateBookDto);
      return book;
  }

  remove(id: number): void {
      const index = this.books.findIndex(b => b.id == id);
      if (index === -1) {
          throw new NotFoundException(`Book with ID ${id} not found`);
      }
      this.books.splice(index, 1);
  }
}
