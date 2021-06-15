// variaveis
let display_escritor = document.querySelector('#h3_escritor')
let display_leitor = document.querySelector('#h3_leitor')
let usuarios_escritores = document.querySelector('#tipo_escritor')
let usuarios_leitores = document.querySelector('#tipo_leitor')

display_escritor.addEventListener('click', function(){
    usuarios_escritores.style.display = 'block'
    usuarios_leitores.style.display = 'none'
})

display_leitor.addEventListener('click', function(){
    usuarios_escritores.style.display = 'none'
    usuarios_leitores.style.display = 'block'
})
