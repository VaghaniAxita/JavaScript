// import navbar from "../Components/navbar.js";
// document.getElementById("navbar").innerHTML = navbar();
// let books = JSON.parse(localStorage.getItem('bookmark-list')) || [];
// const displayBooks = (books) => {
//     const tableBody = document.querySelector("#tbody");
//     tableBody.innerHTML = ''; 

//     books.forEach((book) => {
//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>${book.name}</td>
//             <td>${book.author}</td>
//             <td>${book.description}</td>
//             <td>${book.date}</td>
//             <td>${book.category}</td>
//             <td>${book.price ? book.price : 'N/A'}</td>
//         `;

//         tableBody.appendChild(row);
//     });
// };

// window.onload = () => {
//     displayBooks(bookmarkList);
// };


import navbar from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let books = JSON.parse(localStorage.getItem('bookmark-list')) || [];
const displayBooks = (books) => {
    const tableBody = document.querySelector("#bookmarkTable tbody");
    tableBody.innerHTML = '';

    const rows = books.map((book) => `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>${book.date}</td>
            <td>${book.category}</td>
            <td>${book.price ? book.price : 'N/A'}</td>
        </tr>
    `).join('');


    tableBody.innerHTML = rows;
};


window.onload = () => {
    displayBooks(books);
};
