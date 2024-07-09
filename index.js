const main = document.querySelector('main')
const input = document.getElementById('input')
const resultadoInput = document.getElementById('resultado')
const root = document.querySelector(':root')
const caracteres_validos = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const clear = document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

const equal = document.getElementById('equal').addEventListener('click', calcular)

document.querySelectorAll('.charKey').forEach(function(botaoCharKey){
    botaoCharKey.addEventListener('click', function(){
        const valorDoBotao = botaoCharKey.dataset.value
        input.value += valorDoBotao
    })
})

input.addEventListener('keydown', function(evento){
    evento.preventDefault()

    if(caracteres_validos.includes(evento.key)){
        input.value += evento.key
        return 
    }

    if(evento.key === 'Backspace'){
        input.value = input.value.slice(0 , -1)
    }

    if (evento.key === 'Enter'){
        calcular()
    }
})

function calcular(){
    resultadoInput.value = 'Erro'
    resultadoInput.classList.add('error')

    const resultado = eval(input.value)

    resultadoInput.value = resultado
    resultadoInput.classList.remove('error')    
}

const mudarTema = document.getElementById('mudarTema').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

const copiar = document.getElementById('copiar').addEventListener('click', function(evento){
    const botao = evento.currentTarget
    if (botao.innerText === 'Copiar'){
        botao.innerText = 'Copiado'
        botao.classList.add('sucess')
        window.navigator.clipboard.writeText(resultadoInput)
    }else{
        botao.innerText = 'Copiar'
        GamepadButton.classList.remove('sucess')
    }
})