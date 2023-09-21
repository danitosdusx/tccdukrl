// Este arquivo é usado para armazenar os códigos JavaScript

// Função para criar um botão animado
function criarBotaoAnimado() {
    // Cria um elemento `button`
    const botao = document.createElement("button");
  
    // Define o texto do botão
    botao.textContent = "Botão animado";
  
    // Define a cor de fundo do botão
    botao.style.backgroundColor = "#000";
  
    // Define a cor da fonte do botão
    botao.style.color = "#fff";
  
    // Define o tamanho da fonte do botão
    botao.style.fontSize = "18px";
  
    // Define o raio de borda do botão
    botao.style.borderRadius = "5px";
  
    // Define o cursor do botão
    botao.style.cursor = "pointer";
  
    // Define o evento de `click` do botão
    botao.addEventListener("click", () => {
      // Muda a cor de fundo do botão
      botao.style.backgroundColor = "#fff";
  
      // Muda a cor da fonte do botão
      botao.style.color = "#000";
  
      // Aumenta o tamanho da fonte do botão
      botao.style.fontSize = "24px";
    });
  
    // Retorna o botão
    return botao;
  }
  
  // Cria o botão animado
  const botao = criarBotaoAnimado();
  
  // Adiciona o botão à página
  document.body.appendChild(botao);