

function desmarcarBotaoAnterior(seletor){
   
    const botaoSelecionadoAnteriormente = document.querySelector(`${seletor} .selecionado`);

   
    if (botaoSelecionadoAnteriormente !== null){
        // remover a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
        botaoSelecionadoAnteriormente.querySelector("ion-icon").classList.add("none");
    }
}


let pratoPrincipal;

function escolhePrato(botaoNoThis){
    desmarcarBotaoAnterior('.pratoPrincipal');

   botaoNoThis.classList.add("selecionado");
  

   pratoPrincipal = botaoNoThis.innerHTML;

   verificaQtdePratosSelecionados();
   botaoNoThis.querySelector("ion-icon").classList.remove("none");
};

let bebida;

function escolheBebida(botaoNoThis){
    desmarcarBotaoAnterior('.bebida');
    botaoNoThis.classList.add("selecionado");
    bebida=botaoNoThis.innerHTML;

    verificaQtdePratosSelecionados();
    botaoNoThis.querySelector("ion-icon").classList.remove("none");

};

let sobremesa;


function escolheSobremesa(botaoNoThis){
    desmarcarBotaoAnterior('.sobremesa');
    botaoNoThis.classList.add("selecionado");
    sobremesa=botaoNoThis.innerHTML;
    verificaQtdePratosSelecionados();
    botaoNoThis.querySelector("ion-icon").classList.remove("none");
};
function verificaQtdePratosSelecionados(){
    if(pratoPrincipal !== undefined && bebida !== undefined &&  sobremesa !== undefined){
        const mudar = document.querySelector('.chamaPedido');
        mudar.classList.add('pedido');
        const mudarTexto = document.querySelector('.chamaPedido');
        mudarTexto.innerHTML=`Fechar Pedido`;
        
    }

}