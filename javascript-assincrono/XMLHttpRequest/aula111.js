const btnAPI = document.querySelector(".btn-api");
const resultArea = document.querySelector(".result");

const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText);
      }
    });

    xhr.send();
  });
};

btnAPI.addEventListener("click", () => {
  request({
    method: "GET",
    url: "https://api.adviceslip.com/advice",
  })
    .then((response) => {
      const advice = JSON.parse(response);
      const message = advice.slip.advice;

      loadResult(message);
    })
    .catch((error) => console.log(error));
});

function loadResult(message) {
  const p = document.createElement("p");
  const node = document.createTextNode(`💡 ${message}`);
  p.appendChild(node);
  p.setAttribute("class", "advice");

  resultArea.appendChild(p);
}
