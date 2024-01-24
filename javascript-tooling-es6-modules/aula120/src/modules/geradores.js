const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const geraMaiuscula = () => {
  return String.fromCharCode(rand(65, 91));
};

const geraMinuscula = () => {
  return String.fromCharCode(rand(97, 123));
};

const geraNumero = () => {
  return String.fromCharCode(rand(48, 58));
};

const simbolos = '!"#$%¨&*()_+-`{}^]/;><.,';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(
  qtd,
  maisculas,
  minusculas,
  numeros,
  simbolos
) {
  const senhaArr = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maisculas && senhaArr.push(geraMaiuscula());
    minusculas && senhaArr.push(geraMaiuscula());
    numeros && senhaArr.push(geraNumero());
    simbolos && senhaArr.push(geraSimbolos());
  }

  return senhaArr.join("").slice(0, qtd);
}
