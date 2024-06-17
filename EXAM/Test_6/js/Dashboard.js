import navbar from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let books = JSON.parse(localStorage.getItem('book-list')) || [];
let buyList = JSON.parse(localStorage.getItem('buy-list')) || [];
let bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];

const displayBooks = (filteredBooks) => {
    const tableBody = document.querySelector("#booksTable tbody");
    tableBody.innerHTML = ''; 

    filteredBooks.forEach((book, index) => {
        const row = document.createElement('tr');
        console.log(`Displaying book: ${book.name}, Image URL: ${book.imgUrl}`);
        let imageUrl = book.imgUrl ? book.imgUrl : 'default-image-path.jpg';

        row.innerHTML = `
            <td>${book.author}</td>
            <td>${book.name}</td>
            <td>${book.description}</td>
            <td>${book.date}</td>
            <td>${book.category}</td>
            <td><img src="${imageUrl}" alt="${book.name}" width="50"></td>
            <td>${book.price}</td>
            <td><button class="buy-btn" data-index="${index}">Buy</button></td>
            <td><button class="bookmark-btn" data-index="${index}">Add</button></td>
        `;

        tableBody.appendChild(row);
    });

    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', handleBuy);
    });

    document.querySelectorAll('.bookmark-btn').forEach(button => {
        button.addEventListener('click', handleBookmark);
    });
};

const updateTotalBooks = (count) => {
    document.getElementById('totalBooks').textContent = count;
};

const filterBooks = () => {
    const category = document.getElementById('categoryFilter').value;
    if (category === 'all') {
        displayBooks(books);
        updateTotalBooks(books.length);
    } else {
        const filteredBooks = books.filter(book => book.category === category);
        displayBooks(filteredBooks);
        updateTotalBooks(filteredBooks.length);
    }
};

const handleBuy = (event) => {
    const bookIndex = event.target.dataset.index;
    const book = books.splice(bookIndex, 1)[0];
    buyList.push(book);
    localStorage.setItem('buy-list', JSON.stringify(buyList));
    localStorage.setItem('book-list', JSON.stringify(books));
    filterBooks(); 
};

const handleBookmark = (event) => {
    const bookIndex = event.target.dataset.index;
    const book = books.splice(bookIndex, 1)[0];
    bookmarkList.push(book);
    localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));
    localStorage.setItem('book-list', JSON.stringify(books));
    filterBooks(); 
};

window.onload = () => {
    document.getElementById('categoryFilter').addEventListener('change', filterBooks);
    displayBooks(books);
    updateTotalBooks(books.length);
};