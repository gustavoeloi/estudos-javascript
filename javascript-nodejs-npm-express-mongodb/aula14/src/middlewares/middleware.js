const confirmMiddleware = (req, res, next) => {
  req.session = { message: "Olá, Mundo" };
  let i = 0;
  const intervalId = setInterval(() => {
    console.log(i);
    i++;
    if (i > 2) {
      clearInterval(intervalId);
      next();
    }
  }, 1000);
};

module.exports = confirmMiddleware;
