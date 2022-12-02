const c = (elemento) => document.querySelector(elemento)
let seuVotoPara = c('.d-1-1 span')
let cargo =  c('.d-1-2 span')
let descricao = c('.d-1-4')
let aviso = c('.d-2')
let lateral = c('.d-1-rigth')
let numeros = c('.d-1-3')

let etapaAtual = 0
let numero = ''

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = ''

    for(let i=0; i < etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>'
        } else{
            numeroHtml += '<div class="numero"></div>'
        }
        
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}
function atualizaInterface(){

}

function clicou(n){
    let elNumero = c('.numero.pisca')
    if(elNumero !== null){
        elNumero.innerHTML = n
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca')
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca')
        } else{
            atualizaInterface()
        }
        
    }
}
function branco() {
    alert('branco')
}
function corrige(){
    alert('corrige')
}
function confirma() {
    alert('confirma')
}

comecarEtapa()