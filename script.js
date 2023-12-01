// XML Parsing and Manipulation
const xmlString = `<bookstore>...</bookstore>`;
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
const books = xmlDoc.querySelectorAll('book');
let xmlResults = '';
books.forEach(book => {
    const title = book.querySelector('title').textContent;
    const author = book.querySelector('author').textContent;
    const price = parseFloat(book.querySelector('price').textContent);
    xmlResults += `Title: ${title}, Author: ${author}, Price: $${price}\n`;
});
document.getElementById('xml-results').innerText = xmlResults;

// JSON Handling and Manipulation
const jsonData = {
    "books": [
        { "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling", "price": 19.99 },
        { "title": "The Hobbit", "author": "J.R.R. Tolkien", "price": 15.00 }
    ]
};
const jsonString = JSON.stringify(jsonData, null, 2);
const parsedData = JSON.parse(jsonString);
document.getElementById('json-results').innerText = JSON.stringify(parsedData, null, 2);

// Processing XML and JSON with JavaScript
function processData() {
    // Your processing logic here
}

// Integration of Technologies
function fetchData() {
    fetch('server.php', {
        method: 'POST',
        body: xmlString,
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('integration-results').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}
