document.addEventListener('DOMContentLoaded', function(){
const botaoDeAcessibilidade = document.getElementById ('botao-acessibilidade')
const opcoesDeAcessibilidade = document .getElementById ('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventListener('click', function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})
    
const aumentarFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

let TamanhoAtualFont =1;

aumentarFonteBotao.addEventListener('click', function(){
    TamanhoAtuaFonte += 0.1;
    document.body.style.fontSize = `${TamanhoAtualFonte}rem`
})

diminuirFonteBotao.addEventListener('click', function(){
    TamanhoAtuaFonte -= 0.1;
    document.body.style.fontSize = `${TamanhoAtualFonte}rem`
})

})