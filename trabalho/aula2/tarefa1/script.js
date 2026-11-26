// Laboratório 1 - Verificador de idade

// Passo 2: localiza os elementos pelo id
const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

// Passo 3 e 4: captura o clique, lê e valida a entrada
botao.addEventListener("click", function () {
  const texto = campoIdade.value.trim();
  console.log("Entrada:", texto);

  // Validação 1: campo vazio. Fica antes do Number(), porque Number("") vira 0
  if (texto === "") {
    resultado.textContent = "Informe a idade.";
    return; // encerra o evento, não continua o cálculo
  }

  const idade = Number(texto);

  // Validação 2: precisa ser inteiro e estar entre 0 e 120 (bloqueia -2 e 18.5)
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultado.textContent = "Idade inválida.";
    return;
  }

  // Condicional principal
  if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
  } else {
    // Desafio extra: mostra quantos anos faltam para 18
    const faltam = 18 - idade;
    const palavra = faltam === 1 ? "ano" : "anos";
    resultado.textContent = "Menor de idade. Faltam " + faltam + " " + palavra + " para completar 18.";
  }
});
