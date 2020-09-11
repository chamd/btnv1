var clicks = 0;
var btn = 0;

function clickbtn() {
    if (btn === 0) {
        clicks += 1;
    } else if (btn === 1) {
        clicks += 2;
    } else if (btn === 2) {
        clicks += 5;
    } else if (btn === 3) {
        clicks += 20;
    } else if (btn === 4) {
        clicks += 100;
    } else if (btn === 5) {
        clicks += 500000;
    }
    document.getElementById("click").textContent = `클릭 ${clicks}`;
}

function shop1cost() {
    document.getElementById("shop1cost").style.display = "block";
}

function shop1costO() {
    document.getElementById("shop1cost").style.display = "none";
}

function shop2cost() {
    document.getElementById("shop2cost").style.display = "block";
}

function shop2costO() {
    document.getElementById("shop2cost").style.display = "none";
}

function shop3cost() {
    document.getElementById("shop3cost").style.display = "block";
}

function shop3costO() {
    document.getElementById("shop3cost").style.display = "none";
}

function shop4cost() {
    document.getElementById("shop4cost").style.display = "block";
}

function shop4costO() {
    document.getElementById("shop4cost").style.display = "none";
}

function shop5cost() {
    document.getElementById("shop5cost").style.display = "block";
}

function shop5costO() {
    document.getElementById("shop5cost").style.display = "none";
}

function shop1() {
    if (clicks >= 100) {
        if (btn === 0) {
            document.getElementById("btnName").textContent = "그냥 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(118, 255, 113)";
            clicks -= 100;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            alert("[그냥 버튼]을 구입했습니다 ( - 100클릭 )");
        }
    } else {
        alert('클릭 부족');
    }
}

function shop2() {
    if (clicks >= 400) {
        if (btn === 1) {
            document.getElementById("btnName").textContent = "황금 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(243, 255, 71)";
            clicks -= 400;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            alert("[황금 버튼]을 구입했습니다 ( - 400클릭 )");
        }
    } else {
        alert('클릭 부족');
    }
}

function shop3() {
    if (clicks >= 5000) {
        if (btn === 2) {
            document.getElementById("btnName").textContent = "다이아 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(22, 220, 255);";
            clicks -= 5000;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            alert("[다이아 버튼]을 구입했습니다 ( - 5000클릭 )");
        }
    } else {
        alert('클릭 부족');
    }
}

function shop4() {
    if (clicks >= 5000) {
        if (btn === 3) {
            document.getElementById("btnName").textContent = "루비 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(255, 22, 22)";
            clicks -= 300000;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            alert("[루비 버튼]을 구입했습니다 ( - 300000클릭 )");
        }
    } else {
        alert('클릭 부족');
    }
}

function shop5() {
    if (clicks >= 100000000) {
        if (btn === 4) {
            document.getElementById("btnName").textContent = "레전드 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(192, 98, 255)";
            clicks -= 100000000;
            document.getElementById("click").textContent = `클릭 ${clicks}`;
            btn += 1;
            alert("[레전드 버튼]을 구입했습니다 ( - 100000000클릭 )");
        }
    } else {
        alert('클릭 부족');
    }
}

function clickbtnMouse() {
    document.getElementById("clickbtn").style.backgroundColor = "rgb(77, 77, 77)";
}

function clickbtnMouseO() {
    if (btn === 0) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(150, 74, 23)";
    } else if (btn === 1) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(118, 255, 113)";
    } else if (btn === 2) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(243, 255, 71)";
    } else if (btn === 3) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(22, 220, 255)";
    } else if (btn === 4) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(255, 22, 22)";
    } else if (btn === 5) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(192, 98, 255)";
    }

}

var gift = 0;

function shopClose() {
    document.getElementById("shopOpen").style.display = "inline";
    document.getElementById("shopClose").style.display = "none";
    document.getElementById("shop1").style.display = "none";
    document.getElementById("shop2").style.display = "none";
    document.getElementById("shop3").style.display = "none";
    document.getElementById("shop4").style.display = "none";
    document.getElementById("shop5").style.display = "none";
    gift += 1;
    if (gift === 20) {
        gift == 21;
        clicks += 10000
        alert("참드님이 [클릭 10000]를 선물했습니다!\n내가 만든 기능 사용해줘서 고마워! -참드-");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 200) {
        gift == 201;
        clicks += 100000
        alert("참드님이 [클릭 1000000]를 선물했습니다!\n노가다 잘했어! 수고했어! -참드-");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 2000) {
        gift == 2001;
        clicks += 1000000
        alert("참드님이 [클릭 1000000]를 선물했습니다!\n? -참드-");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
}

function shopOpen() {
    document.getElementById("shopOpen").style.display = "none";
    document.getElementById("shopClose").style.display = "inline";
    document.getElementById("shop1").style.display = "inline";
    document.getElementById("shop2").style.display = "inline";
    document.getElementById("shop3").style.display = "inline";
    document.getElementById("shop4").style.display = "inline";
    document.getElementById("shop5").style.display = "inline";
    gift += 1;
    if (gift === 20) {
        gift == 21;
        clicks += 10000
        alert("참드님이 [클릭 10000]를 선물했습니다!\n내가 만든 기능 사용해줘서 고마워! -참드-");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 200) {
        gift == 201;
        clicks += 100000
        alert("참드님이 [클릭 1000000]를 선물했습니다!\n노가다 잘했어! 수고했어! -참드-");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
    if (gift === 2000) {
        gift == 2001;
        clicks += 1000000
        alert("참드님이 [클릭 1000000]를 선물했습니다!\n? -참드-");
        document.getElementById("click").textContent = `클릭 ${clicks}`;
    }
}