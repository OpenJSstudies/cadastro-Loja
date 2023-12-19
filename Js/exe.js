// app  que cadastra nomes de pessoas que se inscreveram no sorteio e mostra na tela o nome do ganhador 
function Exe(...args){
    let nomes = [...args]
    let num = Math.round(Math.random()*nomes.length)
    console.log(nomes)
    console.log(`Os premiado foi ${nomes[num]}`)    
}
Exe('João','Maria','Felipe','Larissa')