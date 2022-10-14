// let allBooks = fetch("https://striveschool-api.herokuapp.com/books").then((risultato) => {
//   console.log(risultato);
//   risultato.text().then((risultatoTesto) => {
//     console.log(risultatoTesto);
//     console.log(JSON.parse(risultatoTesto));
//   });
// });
async function visualizeAllBooks() {
  let books = await fetch("https://striveschool-api.herokuapp.com/books");
  let textBooks = await books.json();
  console.log(textBooks);
}
window.onload = () => {
  visualizeAllBooks();
};
