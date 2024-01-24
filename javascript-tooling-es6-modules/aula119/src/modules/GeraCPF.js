import ValidaCPF from "./validaCPF";

export default class createCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  maskCpf(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }

  createNewCpf() {
    const cpfWithoutDigit = this.rand();
    const digitOne = ValidaCPF.geraDigito(cpfWithoutDigit);
    const digitTwo = ValidaCPF.geraDigito(cpfWithoutDigit + digitTwo);
    const newCpf = cpfWithoutDigit + digitOne + digitTwo;
    return this.maskCpf(newCpf);
  }
}
