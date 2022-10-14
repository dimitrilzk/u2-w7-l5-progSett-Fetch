async function visualizeAllBooks() {
  let books = await fetch("https://striveschool-api.herokuapp.com/books");
  let textBooks = await books.json();
  for (let allBooks of textBooks) {
    document.querySelector(
      ".container>.row"
    ).innerHTML += `<div class="card mx-1 my-1" style="width: 20rem;">
    <img src="${allBooks.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${allBooks.title}</h5>
      <p class="card-text">${allBooks.category}</p>
      <a href="#" class="btn btn-primary">€ ${allBooks.price}</a>
    </div>
  </div>`;
  }
}
window.onload = () => {
  visualizeAllBooks();
};
