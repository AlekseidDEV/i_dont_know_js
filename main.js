"use strict"

const bookBlock = document.querySelector('.books')
const books = document.querySelectorAll('.book')
const advertising = document.querySelector('.adv')
const titlePage = document.querySelector('h1')

const editingPage = () => {
    advertising.remove()
    document.body.style.background = 'url(./image/amazing.jpg)'
    titlePage.style.color = '#fff'
    books[4].querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов"'
}

const changeBookPlace = () => {
    books[1].after(books[0])
    books[4].after(books[3])
    bookBlock.append(books[2])
}

const chapterOrder = () => {
    const liOrder2 = books[0].querySelectorAll('ul > li')
    const liOrder5 = books[5].querySelectorAll('ul > li')
    const liOrder6 = books[2].querySelectorAll('ul > li')
    const listUl5 = books[5].querySelector('ul')
    const listUl2 = books[0].querySelector('ul')

    const fragmentOrder2 = document.createDocumentFragment()
    const fragmentOrder5 = document.createDocumentFragment()

    fragmentOrder2.append(
        liOrder2[0],
        liOrder2[1],
        liOrder2[3],
        liOrder2[6],
        liOrder2[8],
        liOrder2[4],
        liOrder2[5],
        liOrder2[7],
        liOrder2[9],
        liOrder2[2],
        liOrder2[10],
        )

    fragmentOrder5.append(
        liOrder5[0],
        liOrder5[1],
        liOrder5[9],
        liOrder5[3],
        liOrder5[4],
        liOrder5[2],
        liOrder5[6],
        liOrder5[7],
        liOrder5[5],
        liOrder5[8],
        liOrder5[10],
    )

    listUl5.append(fragmentOrder5)
    listUl2.append(fragmentOrder2)
    liOrder6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>')
}

editingPage()
changeBookPlace()
chapterOrder()


