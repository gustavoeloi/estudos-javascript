import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".input-qtd");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const btnGerarSenha = document.querySelector(".btn-password");

export default () => {
  btnGerarSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = criaSenha();
  });
};

function criaSenha() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || "Nada selecionado!";
}
