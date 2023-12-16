// Adicione ao final do arquivo scripts.js

// Função para exibir mensagem na tela
function exibirMensagemNaTela(mensagem) {
    // Cria um elemento de parágrafo
    const mensagemElemento = document.createElement('p');
    
    // Adiciona a classe de estilo Bootstrap
    mensagemElemento.classList.add('alert', 'alert-success');

    // Define o texto da mensagem
    mensagemElemento.textContent = mensagem;

    // Adiciona o elemento à seção de blog (ou à área desejada na sua página)
    const secaoBlog = document.querySelector('.blog');
    secaoBlog.appendChild(mensagemElemento);

    // Remove a mensagem após alguns segundos (pode ajustar o tempo conforme necessário)
    setTimeout(() => {
        mensagemElemento.remove();
    }, 5000);
}

// Função para enviar mensagem para o WhatsApp Web
function enviarMensagemWhatsapp(nome, mensagem) {
    // Substitua 'SEU_NUMERO_DESTINO' com o número de telefone para onde deseja enviar a mensagem
    const phoneNumber = '18997329690';
    const mensagemFormatada = `Nova mensagem de ${nome}: ${mensagem}`;

    // Constrói o link para abrir o WhatsApp Web com o mensagem preenchida
    const apiUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagemFormatada)}`;

    // Abre uma nova janela ou guia com o link
    window.open(apiUrl);
}


// Função para validar e enviar receita
function submitRecipe() {
    // Recupera os dados do formulário
    const chefName = document.getElementById('chefName').value;
    const recipeDescription = document.getElementById('recipeDescription').value;

    // Validação simples (pode ser aprimorada conforme necessário)
    if (!chefName || !recipeDescription) {
        exibirMensagemNaTela('Por favor, preencha todos os campos do formulário.');
        return;
    }

    // Constrói o corpo da mensagem
    const mensagem = `Nova mensagem de ${chefName}: ${recipeDescription}`;

    // Chama a função para exibir a mensagem na tela
    exibirMensagemNaTela('Receita enviada com sucesso!');

    // Limpa os campos do formulário após o envio
    document.getElementById('chefName').value = '';
    document.getElementById('recipeDescription').value = '';

    // Chama a função para enviar mensagem no WhatsApp
    enviarMensagemWhatsapp(chefName, mensagem);
}
