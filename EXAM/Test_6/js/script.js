import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let books = JSON.parse(localStorage.getItem('book-list')) || [];

const handleData = (e) => {
    e.preventDefault();
    let book = {
        author: document.getElementById("Book_NameAuthor").value,
        name: document.getElementById("NameBook").value,
        description: document.getElementById("DescriptionAdded").value,
        date: document.getElementById("DateBook").value,
        category: document.getElementById("Category").value,
        imgUrl: document.getElementById("ImgURL").value,
        price: document.getElementById("Price").value
    };
    books.push(book);
    localStorage.setItem("book-list", JSON.stringify(books));
    document.getElementById("bookForm").reset();
    alert('Book added successfully!');
};

window.onload = () => {
    document.getElementById("bookForm").addEventListener("submit", handleData);
};