const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

  if (t1 === "") {
    saida.textContent = "Erro: campo vazio (Nota 1).";
    return;
  }
  if (t2 === "") {
    saida.textContent = "Erro: campo vazio (Nota 2).";
    return;
  }
  if (t3 === "") {
    saida.textContent = "Erro: campo vazio (Nota 3).";
    return;
  }

  const n1 = Number(t1);
  const n2 = Number(t2);
  const n3 = Number(t3);

  if (!Number.isFinite(n1) || n1 < 0 || n1 > 10) {
    saida.textContent = "Erro: nota fora da faixa (Nota 1).";
    return;
  }
  if (!Number.isFinite(n2) || n2 < 0 || n2 > 10) {
    saida.textContent = "Erro: nota fora da faixa (Nota 2).";
    return;
  }
  if (!Number.isFinite(n3) || n3 < 0 || n3 > 10) {
    saida.textContent = "Erro: nota fora da faixa (Nota 3).";
    return;
  }

  const media = (n1 + n2 + n3) / 3;

  let situacao;
  if (media >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Recuperação";
  }

  saida.textContent = "Média " + media.toFixed(2) + " — " + situacao;
});
