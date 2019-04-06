// 1. Book Class: Represents a Book
class Book {
    constructor(subject, massage, name, gender, phone) {
        this.subject = subject;
        this.massage = massage;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
    }
}

class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.subject}</td>
        <td>${book.massage}</td>
        <td>${book.name}</td>
        <td>${book.gender}</td>
        <td>${book.phone}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete"> Delete </a></td>
      `;

        list.appendChild(row);
    }

    // 11. delete book  
    static deleteBook(el) {
        // if element contains .delete class
        if (el.classList.contains('delete')) {
            // remove <a> -> <td> -> <tr>       
            el.parentElement.parentElement.remove();
        }
    }

    // 13. show alert  
    // <div class="alert alert-success/alert-danger>Message</div>
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    // 9. clear fields  
    static clearFields() {
        document.querySelector('#subject').value = '';
        document.querySelector('#massage').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#gender').value = '';
        document.querySelector('#phone').value = '';
    }
}

// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(phone) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.phone === phone) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const subject = document.querySelector('#subject').value;
    const massage = document.querySelector('#massage').value;
    const name = document.querySelector('#name').value;
    const gender = document.querySelector('#gender').value;
    const phone = document.querySelector('#phone').value;

    if (subject === '' || massage === '' || name === '' || gender === '' || phone === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        const book = new Book(subject, massage, name, gender, phone);
        UI.addBookToList(book);

        Store.addBook(book);

        UI.showAlert('Contact Added', 'success');

        UI.clearFields();
    }
});

document.querySelector('#book-list').addEventListener('click', (e) => {

    UI.deleteBook(e.target);

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert('Contact Removed', 'success');
});