async function displayBooks() {
  let allBooks = await fetch("http://striveschool-api.herokuapp.com/books");
  let text = await allBooks.json();
  document.querySelector("body").innerHTML = text;
}
