function check(){
    let date = new Date()
    let age = date.getFullYear()
    let inpAge = document.getElementById('ageNumber')
    let res = document.querySelector('div#res')
    if(inpAge.value == '' || inpAge.value > age){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        let sexo = window.document.getElementsByName('sexo')
        let idade = age - inpAge.value
        gender = ''
        res.innerHTML = `você tem ${idade} anos.`
        let img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if(sexo[0].checked){
            gender = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'images/menino.png')
                res.innerHTML += ' tu es um menino ainda'
            }else if(idade <=21){
                //joven
                img.setAttribute('src', 'images/jovemh.png')
                res.innerHTML += ' tu es um jovem ainda'
            }else if(idade <=50){
                //adulto
                img.setAttribute('src', 'images/adulto.png')
                res.innerHTML += ' tu já es um homem adulto'
            }else if(idade <= 120) {
                //idoso
                img.setAttribute('src', 'images/idoso.png')
                res.innerHTML += ' tu es um homem velho'
            }else{
                img.setAttribute('src', 'images/imortalh.png')
                res.innerHTML += ' tu es um imortal'
            }
        }else if(sexo[1].checked){
            gender = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'images/menina.png')
                res.innerHTML += ' tu es uma menina ainda'
            }else if(idade <=21){
                //joven
                img.setAttribute('src', 'images/jovemm.png')
                res.innerHTML += ' tu es uma jovem ainda'
            }else if(idade <=50){
                //adulto
                img.setAttribute('src', 'images/adulta.png')
                res.innerHTML += ' tu já es uma mulher adulta'
            }else if(idade <= 120) {
                //
                img.setAttribute('src', 'images/idosa.png')
                res.innerHTML += ' tu es uma mulher velha'
            }else{
                img.setAttribute('src', 'images/imortalm.png')
                res.innerHTML += ' tu es uma imortal'
            }
        }
        res.appendChild(img)
    }
}
