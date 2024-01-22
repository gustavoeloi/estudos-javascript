// const getPeople = async () => {
//   const response = await fetch("./pessoas.json");
//   const data = await response.json();

//   console.log(data);
// };
// getPeople();

const contentArea = document.querySelector(".content-area");

axios("./pessoas.json").then((response) => loadLists(response.data));

const loadLists = (people) => {
  const ul = document.createElement("ul");
  for (let person of people) {
    const li = document.createElement("li");
    const nome = document.createTextNode(
      `Nome: ${person.nome} | Idade: ${person.idade} | email: ${person.email}`
    );
    li.appendChild(nome);
    ul.appendChild(li);
  }
  contentArea.appendChild(ul);
};
