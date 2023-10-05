document.getElementById('toggleCSS').addEventListener('click', function() {
    
    var linkElement = document.getElementsByTagName('link')[0];
    if (linkElement.href.includes('main.css')) {
        linkElement.href = 'alternate.css'; 
    } else {
        linkElement.href = 'main.css'; 
    }
});