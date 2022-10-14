async function visualizeDisney() {
  let characters = await fetch("https://api.disneyapi.dev/characters");
  let charactersObject = await characters.json();
  let arrayOfCharacters = charactersObject.data;
  for (let character of arrayOfCharacters) {
    document.querySelector(
      ".container>.row"
    ).innerHTML += `<div class="card mx-1 my-1" style="width: 20rem;">
    <img src="${character.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
    </div>
  </div>`;
  }
}

window.onload = () => {
  visualizeDisney();
};
