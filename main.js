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
    const list = books[2].querySelector('ul')
    const chapters = list.querySelectorAll('li')

    books[1].after(books[0])
    books[4].after(books[3])
    bookBlock.append(books[2])

    chapters[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>')
}

const chapterOrder = (book, newOrder) => {
    const list = book.querySelector('ul')
    const chapters = list.querySelectorAll('li')
    const fragment = document.createDocumentFragment()

    newOrder.forEach((index) => fragment.append(chapters[index]))

    list.append(fragment)
}

const newBook2 = [0, 1, 3, 6, 8, 4, 5, 7, 9, 2, 10]
const newBook5 = [0, 1, 9, 3, 4, 2, 6, 7, 5, 8, 10]

editingPage()
changeBookPlace()
chapterOrder(books[0], newBook2)
chapterOrder(books[5], newBook5)


