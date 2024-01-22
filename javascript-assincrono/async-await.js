// setTimeout(() => console.log("Hello"), 0);

// fetch("https://api.adviceslip.com/advice")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("What soup?");

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    const { slip } = data;
    console.log(slip.advice);
  } catch (error) {
    console.log(error);
  }
};

getAdvice().then(console.log("Está é a dica do dia =D"));
