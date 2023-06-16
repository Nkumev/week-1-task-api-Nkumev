function main() {
    const charactersList = document.querySelector("#characters");
    const characterName = document.querySelector("#character-name");
    const characterGender = document.querySelector("#character-gender");
    const characterHeight = document.querySelector("#character-height");
    const characterImage = document.querySelector("#character-image");
  
    const url = "https://swapi.dev/api/people";
    const images = [
      "Beru Whitesun lars.jpeg",
      "Biggs Darklighter.jpeg",
      "C-3PO.jpeg",
      "Darth Vader.jpeg",
      "Leia Organa.jpeg",
      "Luke Sky Walker.jpeg",
      "Obi-Wan Kenobi.jpeg",
      "Owen Lars.jpeg",
      "R2-D2.jpeg",
      "R5-D4.jpeg"
    ];
  
    async function generate() {
      let request = new Request(url);
      let response = await fetch(request);
      let data = await response.json();
  
      let res = data.next;
      while (res) {
        console.log(res);
        request = new Request(res);
        response = await fetch(request);
        data = await response.json();
        data.results.forEach((character, index) => {
          const li = document.createElement("li");
          li.textContent = character.name;
  
          li.addEventListener("click", () => {
            characterImage.src = "style/"+ images[index];
            characterName.textContent = character.name;
            characterGender.textContent = `Gender: ${character.gender}`;
            characterHeight.textContent = `Height: ${character.height} cm`;
          });
          charactersList.appendChild(li);
        });
        res = data.next;
      }

    }
    
    generate();
  }
  
  main();
  