function verify() {
    let p = document.querySelector('input#country')
    let resp = document.querySelector('div#resp')
    let country = p.value

    resp.innerHTML = `Seu país é ${country}!`
    if (country.toUpperCase() == "BRASIL" || country.toUpperCase() == "BRAZIL") {
        resp.innerHTML += '<p>Então você é Brasileiro.'
    } else {
        resp.innerHTML += '<p>Então você é estrangeiro.'
    }
}
