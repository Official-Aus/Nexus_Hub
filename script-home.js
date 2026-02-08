function loadProxy() {
    const input = document.getElementById('url-input').value;
    
    if (!input) return;
    
    let url = input;
    
    if (url.includes('.') && !url.includes(' ')) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
        window.open(proxyUrl, '_blank');
    } else {
        const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
        window.open(searchUrl, '_blank');
    }
    
    document.getElementById('url-input').value = '';
}

document.getElementById('url-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loadProxy();
    }
});