// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Structs: to create own types
contract Contract15 {
    struct Book {
        string title;
        string author;
        bool completed;
    }

    Book[] public books;

    // Add a book to collection pushing new book
    function add(string memory _title, string memory _author) public {
        books.push(Book(_title, _author, false));
    }

    // Get book form array
    function get(
        uint _index
    )
        public
        view
        returns (string memory title, string memory author, bool completed)
    {
        Book storage book = books[_index];
        return (book.title, book.author, book.completed);
    }

    // Set book as completed
    function complete(uint _index) public {
        Book storage book = books[_index];
        book.completed = true;
    }
}
