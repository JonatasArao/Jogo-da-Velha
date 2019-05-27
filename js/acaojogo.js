//Variavel vez e das divs da velha NULL antes do jogo começar.
var vez = null;
var a1 = null;
var a2 = null;
var a3 = null;
var b1 = null;
var b2 = null;
var b3 = null;
var c1 = null;
var c2 = null;
var c3 = null;

//Ao iniciar esconde o tabuleiro do jogo .
$(document).ready(function () {
    $('#jogo').hide();
    $('#nm_p-1').val("Player 1");
    $('#nm_p-2').val("Player 2");
});

/*Ao clicar no botão "jogar" o menu é escondido e o tabuleiro aparece
e a vez é definida para o Jogador 1.
*/
$(document).on('click', '#jogar', function () {
    $('#inicio').hide();
    $('#jogo').show();
    $('#mostrar_nm_p-1').html($('#nm_p-1').val());
    $('#mostrar_nm_p-2').html($('#nm_p-2').val());
    vez = "jogador1";
});

/*
***************************************** Aquilo que faz o jogo funcionar ********************************************
Ao clicar nas divs do tabuleiro, se a vez for do Jogador 1 é atribuida a div o icone escolhido pelo jogador 1 (X ou Y)
se a vez for do Jogador 2 é atribuida a div o icone escolhido pelo jogador 2 (X ou Y).
*/
$(document).on('click', '.grade', function () {
    if (vez == "jogador1") {
        if ((a1 == null) && ($(this).attr('id') == "a1")) {
            a1 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((a2 == null) && ($(this).attr('id') == "a2")) {
            a2 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((a3 == null) && ($(this).attr('id') == "a3")) {
            a3 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((b1 == null) && ($(this).attr('id') == "b1")) {
            b1 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((b2 == null) && ($(this).attr('id') == "b2")) {
            b2 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((b3 == null) && ($(this).attr('id') == "b3")) {
            b3 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((c1 == null) && ($(this).attr('id') == "c1")) {
            c1 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((c2 == null) && ($(this).attr('id') == "c2")) {
            c2 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        } 
        else if ((c3 == null) && ($(this).attr('id') == "c3")) {
            c3 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        vez = "jogador2";
    } else {
        if ((a1 == null) && ($(this).attr('id') == "a1")) {
            a1 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((a2 == null) && ($(this).attr('id') == "a2")) {
            a2 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((a3 == null) && ($(this).attr('id') == "a3")) {
            a3 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((b1 == null) && ($(this).attr('id') == "b1")) {
            b1 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((b2 == null) && ($(this).attr('id') == "b2")) {
            b2 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((b3 == null) && ($(this).attr('id') == "b3")) {
            b3 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((c1 == null) && ($(this).attr('id') == "c1")) {
            c1 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((c2 == null) && ($(this).attr('id') == "c2")) {
            c2 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        } 
        else if ((c3 == null) && ($(this).attr('id') == "c3")) {
            c3 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        vez = "jogador1";
    }
    verifica();
});

/*
********************************* Função que verifica o vencedor da Partida ****************************************
Se Jogador 1 preencheu a diagonal principal ou a secudária ou linha vertical ou linha horizontal ele é o vencedor ou
se Jogador 2 preencheu a diagonal principal ou a secudária ou linha vertical ou linha horizontal ele é o vencedor.
Se nenhum acontecer então é velha.
OBS: O aviso de fim de jogo aparece em um modal.
*/
function verifica(){
    if(((a1 == a2 && a2 == a3) && a1 == "jogador1") || ((a1 == b1 && b1 == c1) && a1 == "jogador1") ||
       ((a1 == b2 && b2 == c3) && a1 == "jogador1") || ((a3 == b2 && b2 == c1) && a3 == "jogador1") ||
       ((a2 == b2 && b2 == c2) && a2 == "jogador1") || ((a3 == b3 && b3 == c3) && a3 == "jogador1") ||
       ((b1 == b2 && b2 == b3) && b1 == "jogador1") || ((c1 == c2 && c2 == c3) && c1 == "jogador1")) 
        {
        $('#mostra_vencedor').html($('#nm_p-1').val());
        $("#vencedor").modal();
        }
    if(((a1 == a2 && a2 == a3) && a1 == "jogador2") || ((a1 == b1 && b1 == c1) && a1 == "jogador2") ||
       ((a1 == b2 && b2 == c3) && a1 == "jogador2") || ((a3 == b2 && b2 == c1) && a3 == "jogador2") ||
       ((a2 == b2 && b2 == c2) && a2 == "jogador2") || ((a3 == b3 && b3 == c3) && a3 == "jogador2") ||
       ((b1 == b2 && b2 == b3) && b1 == "jogador2") || ((c1 == c2 && c2 == c3) && c1 == "jogador2")) 
        {
        $('#mostra_vencedor').html($('#nm_p-2').val());
        $('#vencedor').modal();
        }
    if((!(((a1 == a2 && a2 == a3) && a1 == "jogador1") || ((a1 == b1 && b1 == c1) && a1 == "jogador1") ||
          ((a1 == b2 && b2 == c3) && a1 == "jogador1") || ((a3 == b2 && b2 == c1) && a3 == "jogador1") ||
          ((a2 == b2 && b2 == c2) && a2 == "jogador1") || ((a3 == b3 && b3 == c3) && a3 == "jogador1") ||
          ((b1 == b2 && b2 == b3) && b1 == "jogador1") || ((c1 == c2 && c2 == c3) && c1 == "jogador1"))) &&
       (!(((a1 == a2 && a2 == a3) && a1 == "jogador2") || ((a1 == b1 && b1 == c1) && a1 == "jogador2") ||
          ((a1 == b2 && b2 == c3) && a1 == "jogador2") || ((a3 == b2 && b2 == c1) && a3 == "jogador2") ||
          ((a2 == b2 && b2 == c2) && a2 == "jogador2") || ((a3 == b3 && b3 == c3) && a3 == "jogador2") ||
          ((b1 == b2 && b2 == b3) && b1 == "jogador2") || ((c1 == c2 && c2 == c3) && c1 == "jogador2"))) &&
       ((a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) != null)) 
        {
        $("#velha").modal();
        };
}

//Funções para voltar ao menu principal.
$(document).on('click', '#voltar', function () {
    sair();
});

$(document).on('click', '#encerrar_1', function () {
    sair();
});

$(document).on('click', '#encerrar_2', function () {
    sair();
});

/*Função que reinicia a partida atribuindo o valor NULL as variaveis
Basicamente volta a página no valor de inicio.
*/
function sair() {
    $('#inicio').show();
    $('#jogo').hide();
    $('.grade').removeClass('X');
    $('.grade').removeClass('O');
    vez = null;
    a1 = null;
    a2 = null;
    a3 = null;
    b1 = null;
    b2 = null;
    b3 = null;
    c1 = null;
    c2 = null;
    c3 = null;
}