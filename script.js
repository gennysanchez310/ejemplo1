document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const query = document.getElementById('search-query').value;
    searchBooks(query);
});

function searchBooks(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const books = data.items;
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';

            books.forEach(book => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="book-title">${book.volumeInfo.title}</span> - <span class="book-author">${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconocido'}</span>`;
                bookList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}
