


function desmarcarBotaoAnterior(seletor) {

    const botaoSelecionadoAnteriormente = document.querySelector(`${seletor} .selecionado`);


    if (botaoSelecionadoAnteriormente !== null) {
        
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
        botaoSelecionadoAnteriormente.querySelector("ion-icon").classList.add("none");
    }
}


let pratoPrincipal = "";
let precoPratoPrincipal = "";

function escolhePrato(botaoNoThis) {
    desmarcarBotaoAnterior('.pratoPrincipal');
    botaoNoThis.classList.add("selecionado");
    pratoPrincipal = botaoNoThis.querySelector('h2').innerHTML;
    precoPratoPrincipal = Number(botaoNoThis.querySelector('h6').innerHTML.replace('R$', '').replace(',', '.'));
    verificaQtdePratosSelecionados();
    botaoNoThis.querySelector("ion-icon").classList.remove("none");
    console.log(botaoNoThis);
    

};

let bebida = "";
let precoBebida ="";

function escolheBebida(botaoNoThis) {
    desmarcarBotaoAnterior('.bebidaSelecionada');
    botaoNoThis.classList.add("selecionadoUm");
    bebida = botaoNoThis.querySelector('h2').innerHTML;
    precoBebida  = Number(botaoNoThis.querySelector('h6').innerHTML.replace('R$', '').replace(',', '.'));
    verificaQtdePratosSelecionados();
    botaoNoThis.querySelector("ion-icon").classList.remove("none");
    console.log(botaoNoThis);

};

let sobremesa = "";
let precoSobremesa ="";


function escolheSobremesa(botaoNoThis) {
    desmarcarBotaoAnterior('.sobremesaSelecionada');
    botaoNoThis.classList.add("selecionadoDois");
    sobremesa = botaoNoThis.querySelector('h2').innerHTML;
    precoSobremesa = Number(botaoNoThis.querySelector('h6').innerHTML.replace('R$', '').replace(',', '.'));
    verificaQtdePratosSelecionados();
    botaoNoThis.querySelector("ion-icon").classList.remove("none");
    console.log(botaoNoThis);
    
};


function verificaQtdePratosSelecionados() {
    if (pratoPrincipal !== "" && bebida !== "" && sobremesa !== "") {
        console.log(pratoPrincipal);
        console.log(precoPratoPrincipal);
        console.log(bebida);
        console.log(precoBebida);
        console.log(sobremesa);
        console.log(precoSobremesa);
        const mudar = document.querySelector('.chamaPedido');
        mudar.classList.add('pedido');
        mudar.innerHTML = `Fechar Pedido`;
        mudar.removeAttribute('disabled');


    }

}

function irWhatsapp() {
    const soma = (precoBebida+precoPratoPrincipal+precoSobremesa).toFixed(2).replace('.',',');
    console.log(soma);

    const link = "https://wa.me/5584998093600?text="
    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${pratoPrincipal}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${soma}`);

    document.querySelector('a').setAttribute('href', link + mensagem)



}
