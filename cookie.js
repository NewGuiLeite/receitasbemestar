// Função para verificar se o usuário aceitou os cookies
function verificaCookies() {
    return localStorage.getItem('cookiesAceitos') === 'true';
}

// Função para definir que o usuário aceitou os cookies
function defineCookiesAceitos() {
    localStorage.setItem('cookiesAceitos', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

// Função para exibir o banner de cookies se ainda não foi aceito
function exibeBannerCookies() {
    if (!verificaCookies()) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}

// Função chamada ao clicar no botão de aceitar cookies
function aceitarCookies() {
    defineCookiesAceitos();
}

// Verifica e exibe o banner de cookies ao carregar a página
window.onload = function() {
    exibeBannerCookies();
};
