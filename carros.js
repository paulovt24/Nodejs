import prompt from 'prompt-sync'
let ler= prompt();

console.log('PRECO DOS CARROS');

console.log('INFORME SE É CARRO DE LUXO OU POPULAR');
let tipo = ler();
console.log('INFORME A QUANTIDADE DE DIAS DE ALUGUEL');
let aluguel= Number(ler());
console.log('INFORME OS KMS PERCORRIDOS');
let kms= Number(ler());

let total = ""

if(tipo == 'LUXO'){

    

    if(kms <= 200){

        total = (kms * 0.30) + (aluguel * 150);

    }

    else {

        total = (kms * 0.25) + (aluguel * 150);
    }

}

else if (tipo == 'POPULAR'){

    if(kms <= 100){

        total = (kms * 0.20) + (aluguel * 90);

    }

    else {

        total = (kms * 0.10) + (aluguel * 90);
    }


}

console.log(`DE ACORDO COM NOSSA TABELA, \n O PREÇO TOTAL QUE VOCÊ PAGARÁ SERÁ DE: ${total}`);