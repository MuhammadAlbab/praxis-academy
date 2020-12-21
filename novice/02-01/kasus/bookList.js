class Book {
    constructor(title, genre, author, read, readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;       
    }
}
let book1 = new Book('title1', 'genre1', 'author1', false, '');
let book2 = new Book('title2', 'genre2', 'author2', false, '');
let book3 = new Book('title3', 'genre3', 'author3', false, '');
let book4 = new Book('title4', 'genre4', 'author4', false, '');

class BookList {
    constructor(asRead, notRead, nextRead, currentRead, lastRead, books){
        this.asRead = asRead; 
        this.notRead = notRead; 
        this.nextRead = nextRead; 
        this.currentRead = currentRead; 
        this.lastRead = lastRead;  
        this.books  = books = []; 
    }

    addBook(book){
        this.books.push(book)
    }

    finishCurrentBook(){
        this.books[this.currentRead].read = true
        this.books[this.currentRead].readDate
        this.lastRead = this.currentRead
        this.currentRead += 1
        this.nextRead = this.currentRead + 1
        this.asRead += 1;
    }

}

let bookListKu = new BookList(0, 0, 1, 0);
bookListKu.addBook(book1);
bookListKu.addBook(book2);
bookListKu.addBook(book3)
bookListKu.addBook(book4)
console.log(bookListKu);
//
console.log('\nCurrent Read');
console.log(bookListKu.books[bookListKu.currentRead])
console.log('Next Read');
console.log(bookListKu.books[bookListKu.nextRead]);
console.log('--------------');
//
bookListKu.finishCurrentBook()
//
console.log(bookListKu);
//
console.log('\nLast Read');
console.log(bookListKu.books[bookListKu.lastRead])
console.log('Curent Read');
console.log(bookListKu.books[bookListKu.currentRead])
console.log('Next Read');
console.log(bookListKu.books[bookListKu.nextRead]);
console.log('--------------');
//
bookListKu.finishCurrentBook()
//
console.log(bookListKu);
//
console.log('\nLast Read');
console.log(bookListKu.books[bookListKu.lastRead])
console.log('Curent Read');
console.log(bookListKu.books[bookListKu.currentRead])
console.log('Next Read');
console.log(bookListKu.books[bookListKu.nextRead]);
console.log('--------------');