// Adiciona a sua lista de fornecedores e os IDs correspondentes
var vendorList = {
    2: 'Captify Technologies Limited',
    11: 'Quantcast International Limited',
    12: 'BeeswaxIO Corporation',
    16: 'RTB House S.A.',
    21: 'The Trade Desk',
    23: 'Amobee Inc.',
    25: 'Yahoo EMEA Limited',
    39: 'ADITION technologies GmbH',
    40: 'Active Agent (ADITION technologies GmbH)',
    50: 'Adform',
    68: 'Sizmek by Amazon',
    71: 'Roku Advertising Services',
    73: 'Simplifi Holdings Inc',
    76: 'PubMatic, Inc.',
    79: 'MediaMath, Inc.',
    87: 'Betgenius Ltd',
    91: 'Criteo SA',
    128: 'BIDSWITCH GmbH',
    129: 'IPONWEB GmbH',
    142: 'Media.net Advertising FZ-LLC',
    151: 'Admedo Technology Ltd',
    156: 'Centro, Inc.',
    161: 'Smadex SL',
    238: 'StackAdapt',
    253: 'Improve Digital',
    254: 'LiquidM Technology GmbH',
    264: 'Adobe Advertising Cloud',
    284: 'Weborama',
    316: 'Gamned',
    382: 'The Reach Group GmbH',
    423: 'travel audience GmbH',
    469: 'Zeta Global',
    565: 'Adobe Audience Manager, Adobe Experience Platform',
    655: 'Sportradar AG',
    755: 'Google Advertising Products',
    776: 'Mars Media Group',
    793: 'Amazon Advertising',
    922: 'Amnet GmbH',
    990: 'QuantumCast digital GmbH',
    32: 'Xandr',
    45: 'Smart Adserver',
    52: 'Magnite, Inc.',
    102: 'Magnite, Inc. (Outstream)',
    81: 'PulsePoint',
    10: 'Index Exchange, Inc.',
    114: 'Sublime',
    164: 'Outbrain UK Ltd',
    42: 'Taboola Europe Limited',
    13: 'Sovrn Holdings Inc',
    183: 'EMX Digital LLC',
    165: 'SpotX, Inc',
    259: 'ADYOULIKE SA',
    132: 'Teads',
    72: 'Nano Interactive GmbH',
    724: 'Between Exchange',
    62: 'Justpremium BV',
    69: 'OpenX',
    639: 'Smile Wanted Group',
    241: 'OneTag Limited',
    108: 'Rich Audience Technologies SL',
    28: 'TripleLift, Inc.',
    617: 'Onfocus (Adagio)',
    511: 'Admixer EU GmbH',
    816: 'NoBid, Inc.',
    138: 'ConnectAd Realtime GmbH',
    606: 'Impactify',
    436: 'INVIBES GROUP',
    80: 'Sharethrough, Inc',
    924: 'Viewdeos 2015 LTD',
    799: 'Adpone SL',
    90: 'Teroa S.A.',
    410: 'Adtelligent Inc.',
    780: 'Aniview LTD',
    666: 'BeOp',
    24: 'Epsilon',
    781: 'FeedAd GmbH',
    737: 'Monet Engine Inc',
    210: 'Zemanta, Inc.',
    610: 'Azerion Holding B.V.',
    31: 'Ogury Ltd.',
    157: 'Seedtag Advertising S.L',
    61: 'GumGum, Inc.',
    434: 'DynAdmic',
    484: 'SublimeSkinz - Adledge',
    301: 'ZEOTAP',
    380: 'Vidoomy Media SL',
    244: 'Ermes',
    687: 'Missena',
    95: 'Lotame Solutions, Inc'
};

// Função para aceitar todos os cookies, incluindo os fornecedores específicos
function acceptAllCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    setVendorConsent(true); // Set consent for all vendors
    hideCookieBanner();
}

// Função para recusar cookies, incluindo os fornecedores específicos
function declineCookies() {
    setCookie('cookieConsent', 'declined', 365);
    setVendorConsent(false); // Set consent for all vendors to false
    hideCookieBanner();
}

// Função para configurar o consentimento do fornecedor
function setVendorConsent(consentStatus) {
    for (var vendorId in vendorList) {
        setCookie('vendorConsent_' + vendorId, consentStatus, 365);
        // Additional logic to communicate with your CMP or perform any necessary actions
    }
}
// Função para esconder o banner de cookies
function hideCookieBanner() {
    document.getElementById('cookieConsent').style.display = 'none';
}

// Função para verificar se o usuário aceitou os cookies anteriormente
function checkCookieConsent() {
    var consent = getCookie('cookieConsent');
    if (consent === 'accepted' || consent === 'declined') {
        hideCookieBanner();
    }
}

// Função para configurar um cookie
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Função para obter o valor de um cookie
function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Verificar consentimento ao carregar a página
document.addEventListener('DOMContentLoaded', checkCookieConsent);
