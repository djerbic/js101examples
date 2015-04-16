function getCharCountInOddDivs() {
    var divs = document.querySelectorAll(".content-odd");
    var totalChars = 0;
    for (var i = 0; i < divs.length; i++) {
        totalChars += divs[i].textContent.length;
    }
    return totalChars;
}

function getCharCountInOddWithoutFistDiv() {
    var divs = document.querySelectorAll(".content-odd.content-other");
    var totalChars = 0;
    for (var i = 0; i < divs.length; i++) {
        totalChars += divs[i].textContent.length;
    }
    return totalChars;
}

// this task can also be solved by adding a new css class .content-even
function getWordCountInEvenDivs() {
    var divs = document.querySelectorAll(".content-other");
    var totalWords = 0;
    for (var i = 0; i < divs.length; i++) {
        if (!divs[i].classList.contains("content-odd")) {
            var divText = divs[i].textContent;
            var wordsInDiv = divText.split(" ");
            totalWords += wordsInDiv.length;
        }
    }
    return totalWords;
}

var firstDiv = document.querySelector(".content-first");
firstDiv.textContent = "Total chars in odd divs: " + getCharCountInOddDivs() +
                      "; Total chars in odd without the first: " + getCharCountInOddWithoutFistDiv() +
                      "; Total words in even divs: " + getWordCountInEvenDivs();

// functions getCharCountInOddDivs and getCharCountInOddWithoutFistDiv can be replaced with the following one:
function getCharCountInSelectedDivs(selector) {
    var divs = document.querySelectorAll(selector);
    var totalChars = 0;
    for (var i = 0; i < divs.length; i++) {
        totalChars += divs[i].textContent.length;
    }
    return totalChars;
}
