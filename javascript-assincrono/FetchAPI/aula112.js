const contentArea = document.querySelector(".content-area");
const btnAction = document.querySelector(".btn-action");

const getQuote = async () => {
  try {
    const response = await fetch("https://api.kanye.rest");
    const message = await response.json();
    return loadText(message.quote);
  } catch (e) {
    console.log(e);
  }
};

const loadText = (message) => {
  const p = document.createElement("p");
  const node = document.createTextNode(message);
  p.appendChild(node);

  contentArea.appendChild(p);
};

btnAction.addEventListener("click", getQuote);
