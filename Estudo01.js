const key='fdd8d09f2d049c43470dcd1d38a39f18'
function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector('.titulo').innerHTML = 'Tempo em ' + dados.name

}
async function buscarCidade(input){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
}
function cliqueiNoBotao(){
    const input= document.querySelector('input').value
    buscarCidade(input)
}