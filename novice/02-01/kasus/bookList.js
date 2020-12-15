class Book{
    constructor(title, genre, author, read=true, readDate){
        this.title = title
        this.genre = genre
        this.author = author
        this.read = read=true
        this.readDate = readDate
    }
}

class BookList extends Book{
    constructor(title, genre, author, read=true, readDate, bookAsRead, bookAsNotRead, books = []){
        super(title, genre, author, read=true, readDate)
        this.bookAsRead = bookAsRead
        this.bookAsNotRead = bookAsNotRead
        this.books = books = []
    }
    
    addBook(){

    }

    finishCurentBook(){
        
    }
}
