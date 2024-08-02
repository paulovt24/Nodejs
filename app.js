import express from 'express'
const servidor = express ();

servidor.use(express.json());



servidor.get('/venda/acai', (req,resp) => {

let acaip= Number(req.query.acaip)
let acaim= Number(req.query.acaim)
let acaig= Number(req.query.acaig)

let p= 13.50;
let m= 15;
let g= 17.50;

let totalp= p*acaip;
let totalm= m*acaim;
let totalg= g*acaig;

let total= totalp+totalm+totalg;

resp.send({

preço:{

acaiPequeno: p,
acaiMedio: m,
acaiGrande: g

},

totalPorTamanhos:{

Pequenos: totalp,
Medios: totalm,
Grandes:totalg

},

total: total

})


})


servidor.post('/media/aluno', (req,resp) => {

let aluno= req.body.aluno;
let nota1= Number(req.query.nota1);
let nota2= Number(req.query.nota2);
let nota3= Number(req.query.nota3);
let aprovação= false;



let media= (nota1+nota2+nota3) / 3;


if(media>= 5){

aprovação=true;

}



resp.send({

alunosRegistro:{

aluno:aluno

},

mediaAluno:{

aluno:aluno,
media: media

},

situação:{

aprovado:aprovação

}

})

})


servidor.listen(5001, () =>console.log('API subida com sucesso'));