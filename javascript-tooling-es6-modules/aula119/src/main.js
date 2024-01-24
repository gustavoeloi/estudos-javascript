import GeraCPF from "./modules/GeraCPF";
import "./assets/css/style.css";

(function () {
  const cpf = new GeraCPF();
  const cpfGenereted = document.querySelector(".resultado");
  cpfGenereted.innerHTML = cpf.createNewCpf();
})();
