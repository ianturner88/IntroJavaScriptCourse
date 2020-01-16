class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {

        const list = document.getElementById('book-list');
            // Create tr element
            const row = document.createElement('tr');
            // Insert columns
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);

    }

    showAlert(message, className) {
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('container');
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    console.log('test');

    const title = document.getElementById('title').value, author = document.getElementById('author').value, isbn = document.getElementById('isbn').value;

    // instantiate book
    const book = new Book(title, author, isbn);
    // Instantiate UI
    const ui = new UI();
    console.log(ui);

    // Add book to list
    ui.addBookToList(book);

    // Validate
    if(title === "" || author === "" || isbn === ""){
        // Error alert
        UI.showAlert('Please fill in all fields', "error");
    } else {
        // Add book to list
        ui.addBookToList(book);
        // Show success
        ui.showAlert('Book Added', 'success');
        // Clear fields
        ui.clearFields();
    }

    // Clear fields
    ui.clearFields();
    // console.log(book);

    e.preventDefault();
});