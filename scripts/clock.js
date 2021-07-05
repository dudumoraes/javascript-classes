function load() {
    let helloDiv = window.document.getElementById('hello')
    let imagem = window.document.getElementById('img')
    let now = new Date()
    let hours = '22'//now.getHours() 
    let minutes = now.getMinutes()

    if (hours >= 0 && hours < 12) {
        let text = 'Bom dia'
        helloDiv.innerHTML = `${text}! Agora são ${hours}h${minutes}min`
        imagem.src = 'https://github.com/dudumoraes/javascript-classes/issues/1#issue-937299469'
        document.body.style.background = '#fdeb81'
    } else if (hours >= 12 && hours <= 18) {
        let text = 'Boa tarde'
        helloDiv.innerHTML = `${text}! Agora são ${hours}h${minutes}min`
        imagem.src = 'https://github.com/dudumoraes/javascript-classes/issues/2#issue-937301057'
        document.body.style.background = '#fe7802'
    } else {
        let text = 'Boa noite'
        helloDiv.innerHTML = `${text}! Agora são ${hours}h${minutes}min`
        imagem.src = 'ibagens/noite.png'
        document.body.style.background  = '#23373a'
    }
}    
