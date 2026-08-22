const botaoOrcamento = document.getElementById("botao-orcamento");
const modalOrcamento = document.getElementById("modal-orcamento");
const fecharModal = document.getElementById("fechar-modal");

botaoOrcamento.addEventListener("click", function(event) {
    event.preventDefault();

    modalOrcamento.style.display = "flex";
});

fecharModal.addEventListener("click", function() {
    modalOrcamento.style.display = "none";
});
