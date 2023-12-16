// Função para enviar mensagem para o WhatsApp Web
function enviarMensagemWhatsapp(nome, mensagem) {
    // Substitua 'SEU_NUMERO_DESTINO' com o número de telefone para onde deseja enviar a mensagem
    const phoneNumber = '18997329690';
    const mensagemFormatada = `Nova mensagem de ${nome}: ${mensagem}`;

    // Constrói o link para abrir o WhatsApp Web com a mensagem preenchida
    const apiUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(mensagemFormatada)}`;

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
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    // Constrói o corpo do e-mail
    const emailBody = `
        Seu Nome: ${chefName}
        Descrição da Receita: ${recipeDescription}
    `;

    // Simula o envio do e-mail (substitua com a lógica real de envio)
    // Neste exemplo, será exibido um alerta com o corpo do e-mail
    alert('Receita enviada com sucesso!\n\nDetalhes:\n\n' + emailBody);

    // Limpa os campos do formulário após o envio
    document.getElementById('chefName').value = '';
    document.getElementById('recipeDescription').value = '';

    // Chama a função para enviar mensagem no WhatsApp
    enviarMensagemWhatsapp(chefName, 'Nova receita enviada!');
}
