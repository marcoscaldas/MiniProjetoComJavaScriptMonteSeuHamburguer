function montarHamburguer(){

    let hamburguer = [];
    let continuar = true;


    while(continuar){

        const escolha = Number( prompt("Escolha um ingrediente:\n1. Pão\n"+
            "2. Carne\n3. Queijo\n4. Alface e Tomate\n5. Finalizar pedido"));
        
            switch(escolha){
                case 1:
                    hamburguer.push("Pão");
                    alert("Pão adicionado!");
                    break;

                case 2:
                    hamburguer.push("Carne");
                    alert("Carne adicionada!");
                    break;

                case 3:
                    hamburguer.push("Queijo");
                    alert("Queijo adicionado!");
                    break;

                case 4:
                    hamburguer.push("Alface e Tomate");
                    alert("Alface e Tomate adicionados!");
                    break;

                case 5:
                    alert("Seu pedido está pronto!");
                    document.getElementById('pedido').textContent =
                    "Seu hambúrguer está pronto com os seguintes ingredientes: "
                    + hamburguer.join(", ");
                    continuar = false;                                     
                    break;

                default:
                    alert("Opção inválida, tente novamente.");
                    break;
            }
   
        }
}