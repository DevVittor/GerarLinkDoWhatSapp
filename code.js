var numeroZap = document.querySelector("#numeroWhatsapp");
var textoZap = document.querySelector("#textoWhatsapp");
var url = "https://wa.me/";
let btnCriar = document.getElementById("btnClick");
let textArea = document.querySelector(".text");
let copiar = document.querySelector("#copy");
let codigoBr = "+55";
btnCriar.addEventListener("click", () => {
  textArea.textContent = `${url}${codigoBr}${numeroZap.value}?text=${textoZap.value}`;
  copiar.style.display = "block";
});

copiar.addEventListener("click", () => {
  textArea.select();
  document.execCommand("copy");
  alert(`Link do Whatsapp Criado e Copiado com sucesso!`);
});
