// pessoas

var pessoa1 = document.querySelector('#p1');
var pessoa2 = document.querySelector('#p2');
var pessoa3 = document.querySelector('#p3');
var pessoa4 = document.querySelector('#p4');

// botao

var botao1 = document.querySelector('#b1');
var botao2 = document.querySelector('#b2');
var botao3 = document.querySelector('#b3');
var botao4 = document.querySelector('#b4');

var counter = 0;
var time = setInterval(() => {
    if (counter >= 4) {
        counter = 0;
    }if (window.innerWidth >= 426) {
        apertar(5)
        clearInterval(time)   
    } 
    else {
        counter++
        apertar(counter);
    }
}, 3000)

function apertar(x) {
    var x = parseInt(x);
    switch (x) {
        case 1:
            botao1.style.backgroundColor = '#fab700';
            pessoa1.style.opacity = 1;
            pessoa1.style.left = '0';
            botao2.style.backgroundColor = '#ededed';
            pessoa2.style.opacity = 0;
            pessoa2.style.left = '100px';
            botao3.style.backgroundColor = '#ededed';
            pessoa3.style.opacity = 0;
            pessoa3.style.left = '100px';
            botao4.style.backgroundColor = '#ededed';
            pessoa4.style.opacity = 0;
            pessoa4.style.left = '100px';
            break;
        case 2:
            botao2.style.backgroundColor = '#fab700';
            pessoa2.style.opacity = 1;
            pessoa2.style.left = '0';
            botao1.style.backgroundColor = '#ededed';
            pessoa1.style.opacity = 0;
            pessoa1.style.left = '-100px';
            botao3.style.backgroundColor = '#ededed';
            pessoa3.style.opacity = 0;
            pessoa3.style.left = '100px';
            botao4.style.backgroundColor = '#ededed';
            pessoa4.style.opacity = 0;
            pessoa4.style.left = '100px';
            break;
        case 3:
            botao3.style.backgroundColor = '#fab700';
            pessoa3.style.opacity = 1;
            pessoa3.style.left = '0';
            botao2.style.backgroundColor = '#ededed';
            pessoa2.style.opacity = 0;
            pessoa2.style.left = '-100px';
            botao1.style.backgroundColor = '#ededed';
            pessoa1.style.opacity = 0;
            pessoa1.style.left = '-100px';
            botao4.style.backgroundColor = '#ededed';
            pessoa4.style.opacity = 0;
            pessoa4.style.left = '100px';
            break;
        case 4:
            botao4.style.backgroundColor = '#fab700';
            pessoa4.style.opacity = 1;
            pessoa4.style.left = '0';
            botao2.style.backgroundColor = '#ededed';
            pessoa2.style.opacity = 0;
            pessoa2.style.left = '-100px';
            botao3.style.backgroundColor = '#ededed';
            pessoa3.style.opacity = 0;
            pessoa3.style.left = '-100px';
            botao1.style.backgroundColor = '#ededed';
            pessoa1.style.opacity = 0;
            pessoa1.style.left = '-100px';
            break;
        case 5:
            pessoa1.style.opacity = 1;
            pessoa1.style.left = 0;
            pessoa2.style.opacity = 1;
            pessoa2.style.left = 0;
            pessoa3.style.opacity = 1;
            pessoa3.style.left = 0;
            pessoa4.style.opacity = 1;
            pessoa4.style.left = 0;
            break;
    }
}