// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to list
UI.prototype.addBookToList = function(book) {
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

    // Show alert
    UI.prototype.showAlert = function(message, className){
        // Create div
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

    //Delete book
    ui.prototype.deleteBook = function(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    // Clear fields
    UI.prototype.clearFields = function() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    console.log(row);
}

// Event listener for add book
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

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    
    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});