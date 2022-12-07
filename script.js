const c = (elemento) => document.querySelector(elemento)
let seuVotoPara = c('.d-1-1 span')
let cargo =  c('.d-1-2 span')
let descricao = c('.d-1-4')
let aviso = c('.d-2')
let lateral = c('.d-1-rigth')
let numeros = c('.d-1-3')

let etapaAtual = 0
let numero = ''
let votoBranco = false
let votos = []

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = ''
    numero = ''
    votoBranco = false

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
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item)=>
        (item.numero === numero) ? true : false
    )
    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`
        
        let fotosHtml = ''
        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}">${candidato.fotos[i].legenda}</div>`
        }
        lateral.innerHTML = fotosHtml
    } else{
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`
    }
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
        numero = ''
        votoBranco = true
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        numeros.innerHTML = ''
        lateral.innerHTML = ''
        descricao.innerHTML = `<div class="aviso--branco pisca">VOTO BRANCO</div>`
       
}
function corrige(){
    comecarEtapa()
}
function confirma() {
    let etapa = etapas[etapaAtual]

    let votoConfirmado = false

    if(votoBranco === true){
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        })
    } else if(numero.length === etapa.numeros){
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        })
    }

    if(votoConfirmado){
        etapaAtual++
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa()
        } else {
            c('.tela').innerHTML = `<div class="aviso--gigante">FIM!</div>`
            console.log(votos);
        }
    } 
}

comecarEtapa()