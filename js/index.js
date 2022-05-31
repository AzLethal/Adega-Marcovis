//Seletor de Imagens --> slide;
const primeiraImg = $('.primeira');
const segundaImg = $('.segunda');
const terceiraImg = $('.terceira');

const imagens = [primeiraImg, segundaImg, terceiraImg];

//Botões Slide
const botaoNext = $('.next');
const botaoPrevious = $('.previous');

//lógica;
let currentPosition = 0;
let nextPosition = currentPosition + 1;
let previousPosition = currentPosition -1;

botaoNext.on('click', proximaImg);

botaoPrevious.on('click', imgAnterior);

function proximaImg() {
    if(imagens[currentPosition]){
        imagens[currentPosition].addClass('close');
        if(nextPosition == 3) {
            imagens[currentPosition].removeClass('open close');
            imagens[previousPosition].removeClass('close open');
            currentPosition = 0;
            nextPosition = currentPosition + 1;
            previousPosition = currentPosition - 1;
            imagens[currentPosition].removeClass('close open');
            console.log(currentPosition);
            console.log(nextPosition);
            console.log(previousPosition);
            return;
        }
        imagens[nextPosition].addClass('open');
        currentPosition++;
        nextPosition++;
        previousPosition = nextPosition - 2;
        console.log(currentPosition);
        console.log(nextPosition);
        console.log(previousPosition)
    }
}

function imgAnterior() {
    if(imagens[currentPosition]){
        console.log(previousPosition);
        console.log(currentPosition);
        console.log(nextPosition);
        imagens[currentPosition].addClass('close');
        if(previousPosition < 0) {
            previousPosition = 2;
            imagens[previousPosition].removeClass('close');
            imagens[previousPosition].addClass('open');
            imagens[currentPosition].addClass('close');
            currentPosition = 2;
            previousPosition--;
            nextPosition = 3;
            return;
        }
        if(previousPosition == 0 && currentPosition == 1) {
            imagens[previousPosition].removeClass('open close');
            imagens[currentPosition].removeClass('open close');
            currentPosition = 0
            nextPosition = 1;
            previousPosition--;
            console.log(currentPosition);
            console.log(nextPosition);
            console.log(previousPosition)
            return;
        }
        imagens[previousPosition].removeClass('close');
        imagens[previousPosition].addClass('open');
        previousPosition--;
        currentPosition--;
        nextPosition--;
        imagens[nextPosition].removeClass('open close');
        console.log(previousPosition);
        console.log(currentPosition);
        console.log(nextPosition);
    }
}

//Seletores do menu suspenso;
const menuBotao = $('.link-suspenso');
const menuSuspenso = $('.menu-suspenso');


const menuCerveja = $('#cervejas');
const cervejas = $('.cerveja');
const menuTequila = $('#tequilas')
const tequilas = $('.tequila');
const menuVodka = $('#vodkas')
const vodkas = $('.vodka');
const menuRefrigerante = $('#refrigerantes')
const refrigerantes = $('.refrigerante');

let menuAberto = false;
let subMenuAberto = false;


//lógica do menu;
menuCerveja.on('click', manipulaSubMenu);
menuTequila.on('click', manipulaSubMenu);
menuVodka.on('click', manipulaSubMenu);
menuRefrigerante.on('click', manipulaSubMenu);
menuBotao.on('click', manipulaMenu);

function manipulaMenu(event) {
    event.preventDefault();
    if(menuAberto){
        menuSuspenso.css('margin-left', '-700px');
        menuBotao.css('padding-left', '4rem');
        menuAberto = false;
    } else if (!menuAberto) {
        menuSuspenso.css('margin-left', '0px');
        menuBotao.css('padding-left', '26rem');
        menuAberto = true;
    }
}

function manipulaSubMenu(event) {
    event.preventDefault();
    if(!subMenuAberto) {
        $(this).children().css('display', 'flex')
        subMenuAberto = true;
    } else if (subMenuAberto) {
        $(this).children().css('display', 'none');
        subMenuAberto = false;
    }
}




