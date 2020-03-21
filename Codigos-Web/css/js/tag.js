const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    // tagName = nome do elemento
    // toLowerCase() = deixar tudo em minusculo
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = colors.get(tagName)
    // Peguei os elementos e coloquei uma cor na borda deles

    if (!elemento.classList.contains('nolabel')) {
        // Se ele não tiver marcado com label eu coloco dentro dele um label
        const label = document.createElement('label')
        // Coloquei essa cor de fundo
        label.style.backgroundColor = colors.get(tagName)
        // E inserir o nome 
        label.innerHTML = tagName
        // Antes do primeiro elemento filho que eventualmente esteja presente nessa tag
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})






