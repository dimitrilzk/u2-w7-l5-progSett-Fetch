async function visualizeAllBooks() {
  let books = await fetch("https://striveschool-api.herokuapp.com/books");
  let textBooks = await books.json();
  console.log(textBooks);
  for (let allBooks of textBooks) {
    document.getElementById("libri").innerHTML += `<p>${allBooks.title}</p>`;
  }
}
window.onload = () => {
  visualizeAllBooks();
};
