var isHover = false;
window.onload = function () {
    giftLoto();
};
function giftLoto() {
    var giftArr = [7, 1, 5, 8, 4, 2, 6, 0, 3, 9];
    document.getElementById('body').innerHTML += "<div id='giftContainer'></div>";
    document.getElementById('giftContainer').innerHTML += "<input type= 'button' id='shuffleBtn' value='shuffle'>";
    document.getElementById('giftContainer').innerHTML += "<div id= 'giftGrid'></div>";
    document.getElementById('giftContainer').innerHTML += "<div id= 'winningGiftLine'></div>";
    document.getElementById('shuffleBtn').addEventListener('click', function () { return shuffleGifts(giftArr); });
    giftArr.sort(function (num1, num2) { return num2 - num1; });
    printGiftsAndAddEvents(giftArr, '+');
}
function shuffleGifts(arr) {
    arr.sort(function () { return 0.5 - Math.random(); });
    document.getElementById('giftGrid').innerHTML = '';
    document.getElementById('winningGiftLine').textContent = "";
    printGiftsAndAddEvents(arr);
}
function printGiftsAndAddEvents(arr, param) {
    for (var i = 0; i < 10; i++) {
        document.getElementById('giftGrid').innerHTML += param ? "<div id='gift" + arr[i] + "' class='gift'>" + arr[i] + "</div>" : "<div id='gift" + arr[i] + "' class='gift'></div>";
    }
    if (!param) {
        for (var i = 0; i < 10; i++) {
            var gift = document.getElementsByClassName('gift')[i].id;
            document.getElementsByClassName('gift')[i].addEventListener("click", pickGift.bind(this, arr[i]));
            document.getElementsByClassName('gift')[i].addEventListener("mouseover", hover.bind(this, gift));
            document.getElementsByClassName('gift')[i].addEventListener("mouseout", hover.bind(this, gift));
        }
    }
}
function pickGift(param) {
    switch (param) {
        case (1): {
            document.getElementById('winningGiftLine').textContent = "נמוך מידי";
            return;
        }
        case (2): {
            document.getElementById('winningGiftLine').textContent = "כמעט אבל לא";
            return;
        }
        case (3): {
            document.getElementById('winningGiftLine').textContent = "עוד קצת והיית זוכה";
            return;
        }
        case (4): {
            document.getElementById('winningGiftLine').textContent = "זכית במקום הראשון";
            return;
        }
        case (5): {
            document.getElementById('winningGiftLine').textContent = "הגזמת,יותר מידי";
            return;
        }
        case (6): {
            document.getElementById('winningGiftLine').textContent = "אולי מקום שני, עוד קצת";
            return;
        }
        case (7): {
            document.getElementById('winningGiftLine').textContent = "ברכות!מקום שני";
            return;
        }
        case (8): {
            document.getElementById('winningGiftLine').textContent = "גם שלישי זה טוב";
            return;
        }
        default: {
            document.getElementById('winningGiftLine').textContent = "";
        }
    }
}
function hover(param) {
    isHover = !isHover;
    isHover ? document.getElementById(param).style.boxShadow = '#aaa 5px 5px 5px' : document.getElementById(param).removeAttribute('style');
}
