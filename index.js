const formulario = document.getElementById("formulariofirst");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Realiza alguma validação dos campos (exemplo simples)
  if (nome.trim() === "" || email.trim() === "") {
    alert("Preencha todos os campos!");
  } else {
    // Se a validação passar, você pode fazer alguma ação adicional aqui, como enviar o formulário para o servidor usando AJAX ou redirecionar o usuário para outra página.
    // Neste exemplo, vamos apenas exibir uma mensagem de sucesso.
    alert("Formulário enviado com sucesso!");
  }
});
