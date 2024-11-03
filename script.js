function encode() {
    const shift = parseInt(document.getElementById('shift').value);
    const inputText = document.getElementById('inputText').value;
    const outputText = caesarCipher(inputText, shift);
    document.getElementById('outputText').value = outputText;
}

function decode() {
    const shift = parseInt(document.getElementById('shift').value);
    const inputText = document.getElementById('inputText').value;
    const outputText = caesarCipher(inputText, -shift);
    document.getElementById('outputText').value = outputText;
}

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char.charCodeAt(0) >= 97 ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}