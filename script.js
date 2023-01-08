

function desmarcarBotaoAnterior(seletor){
    // pegar o botão que foi selecionado anteriormente
    const botaoSelecionadoAnteriormente = document.querySelector(`${seletor} .selecionado`);

    // anter de remover a classe selecionado, verificar se o elementonão é null
    if (botaoSelecionadoAnteriormente !== null){
        // remover a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
}


let pratoPrincipal;

function escolhePrato(botaoNoThis){
    desmarcarBotaoAnterior('.pratoPrincipal');

   botaoNoThis.classList.add("selecionado");

   pratoPrincipal = botaoNoThis.innerHTML;

   verificaQtdePratosSelecionados();
};

let bebida;

function escolheBebida(botaoNoThis){
    desmarcarBotaoAnterior('.bebida');
    botaoNoThis.classList.add("selecionado");
    bebida=botaoNoThis.innerHTML;

    verificaQtdePratosSelecionados();

};

let sobremesa;


function escolheSobremesa(botaoNoThis){
    desmarcarBotaoAnterior('.sobremesa');
    botaoNoThis.classList.add("selecionado");
    sobremesa=botaoNoThis.innerHTML;
    verificaQtdePratosSelecionados();
};
function verificaQtdePratosSelecionados(){
    if(pratoPrincipal !== undefined && bebida !== undefined &&  sobremesa !== undefined){
        const mudar = document.querySelector('.chamaPedido');
        mudar.classList.add('pedido');
        const mudarTexto = document.querySelector('.chamaPedido');
        mudarTexto.innerHTML=`Fechar Pedido`;
        
    }

}