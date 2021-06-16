// variaveis
let display_escritor = document.querySelector('#h3_escritor')
let display_leitor = document.querySelector('#h3_leitor')
let usuarios_escritores = document.querySelector('#tipo_escritor')
let usuarios_leitores = document.querySelector('#tipo_leitor')

display_escritor.addEventListener('click', function(){
    usuarios_escritores.style.display = 'block'
    usuarios_leitores.style.display = 'none'
    
    // display_escritor.classList.add('green')
    // display_leitor.classList.remove('green')
    // display_leitor.classList.add('black')

    display_escritor.classList.replace('black', 'green')
    display_escritor.classList.replace('non_border', 'border_red')

    display_leitor.classList.replace('green', 'black')
    display_leitor.classList.replace('border_red', 'non_border')
})

display_leitor.addEventListener('click', function(){
    usuarios_escritores.style.display = 'none'
    usuarios_leitores.style.display = 'block'

    // display_leitor.classList.add('green')
    // display_escritor.classList.add('black')
    // display_escritor.classList.remove('green')

    display_leitor.classList.replace('black', 'green')
    display_leitor.classList.replace('non_border', 'border_red')

    display_escritor.classList.replace('green', 'black')
    display_escritor.classList.replace('border_red', 'non_border')
    
})
