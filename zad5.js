function reverseAndUppercase(text) {
    var result = "";
    text = text.toUpperCase();
    for (var i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

console.log(reverseAndUppercase("Ovo plavo Valpovo"));